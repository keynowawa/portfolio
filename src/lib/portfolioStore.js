import { portfolioBucket, supabase } from './supabase';

export const adminEmail = 'info.keyno@gmail.com';

function safeName(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9.]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 90);
}

async function compressImage(file) {
  if (!file.type.startsWith('image/') || file.type === 'image/gif' || file.size < 550_000) return file;

  const bitmap = await createImageBitmap(file);
  const maxSide = 2400;
  const scale = Math.min(1, maxSide / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  canvas.getContext('2d', { alpha: false }).drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();

  const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/webp', 0.84));
  if (!blob || blob.size >= file.size) return file;
  return new File([blob], `${file.name.replace(/\.[^.]+$/, '')}.webp`, { type: 'image/webp' });
}

export async function uploadPortfolioAsset(file, folder = 'uploads') {
  if (!supabase) throw new Error('Supabase is not configured.');
  const prepared = await compressImage(file);
  const extension = prepared.name.split('.').pop() || 'bin';
  const base = safeName(prepared.name.replace(/\.[^.]+$/, '')) || 'asset';
  const path = `${safeName(folder)}/${Date.now()}-${base}.${safeName(extension)}`;
  const { error } = await supabase.storage.from(portfolioBucket).upload(path, prepared, {
    cacheControl: '31536000',
    contentType: prepared.type,
    upsert: false,
  });
  if (error) throw error;
  const { data } = supabase.storage.from(portfolioBucket).getPublicUrl(path);
  return data.publicUrl;
}

export async function loadAdminSections() {
  const { data, error } = await supabase
    .from('portfolio_sections')
    .select('section_key, draft_content, published_content, updated_at, published_at')
    .order('section_key');
  if (error) throw error;
  return data;
}

export async function saveDraft(sectionKey, content, userId) {
  const { error } = await supabase.from('portfolio_sections').upsert({
    section_key: sectionKey,
    draft_content: content,
    updated_at: new Date().toISOString(),
    updated_by: userId,
  }, { onConflict: 'section_key' });
  if (error) throw error;
}

export async function publishSection(sectionKey, content, userId) {
  const now = new Date().toISOString();
  const { error } = await supabase.from('portfolio_sections').upsert({
    section_key: sectionKey,
    draft_content: content,
    published_content: content,
    updated_at: now,
    published_at: now,
    updated_by: userId,
  }, { onConflict: 'section_key' });
  if (error) throw error;
  const { error: publicError } = await supabase.from('portfolio_published').upsert({
    section_key: sectionKey,
    content,
    published_at: now,
    updated_by: userId,
  }, { onConflict: 'section_key' });
  if (publicError) throw publicError;
  return now;
}
