import { useEffect, useMemo, useState } from 'react';
import { cloneDefaultSections, mergePortfolioSections, sectionLabels } from '../content/editorDefaults';
import {
  adminEmail,
  loadAdminSections,
  publishSection,
  saveDraft,
  uploadPortfolioAsset,
} from '../lib/portfolioStore';
import { isSupabaseConfigured, supabase } from '../lib/supabase';
import styles from './StudioPage.module.css';

const tabs = [
  ['overview', 'Overview'],
  ['site', 'Site details'],
  ['projects', 'Projects'],
  ['carousel', 'Carousel'],
  ['journey', 'Journey'],
  ['reviews', 'Reviews'],
  ['toolkit', 'Tech stack'],
  ['certificates', 'Certificates'],
];

const newId = (prefix) => `${prefix}-${Date.now().toString(36)}`;
const splitLines = (value) => value.split('\n').map((item) => item.trim()).filter(Boolean);
const splitTags = (value) => value.split(',').map((item) => item.trim()).filter(Boolean);

function Field({ label, hint, children, wide = false }) {
  return <label className={`${styles.field} ${wide ? styles.wideField : ''}`}><span>{label}</span>{children}{hint && <small>{hint}</small>}</label>;
}

function TextField({ label, value = '', onChange, type = 'text', placeholder, hint, wide }) {
  return <Field label={label} hint={hint} wide={wide}><input type={type} value={value ?? ''} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} /></Field>;
}

function TextArea({ label, value = '', onChange, rows = 4, hint, wide = true }) {
  return <Field label={label} hint={hint} wide={wide}><textarea rows={rows} value={value ?? ''} onChange={(event) => onChange(event.target.value)} /></Field>;
}

function Toggle({ checked, onChange, label }) {
  return <label className={styles.toggle}><input type="checkbox" checked={Boolean(checked)} onChange={(event) => onChange(event.target.checked)} /><i /><span>{label}</span></label>;
}

function UploadField({ label, value, folder, accept = 'image/*', onUploaded, multiple = false }) {
  const [uploading, setUploading] = useState(false);
  const handleUpload = async (event) => {
    const files = [...event.target.files];
    if (!files.length) return;
    setUploading(true);
    try {
      const urls = [];
      for (const file of files) urls.push(await uploadPortfolioAsset(file, folder));
      onUploaded(multiple ? urls : urls[0]);
    } finally {
      setUploading(false);
      event.target.value = '';
    }
  };

  return (
    <div className={styles.uploadField}>
      <div>{value && !multiple ? <img src={value} alt="Current upload" /> : <span aria-hidden="true">↑</span>}</div>
      <label><strong>{uploading ? 'Uploading…' : label}</strong><small>Images are compressed automatically.</small><input type="file" accept={accept} multiple={multiple} onChange={handleUpload} disabled={uploading} /></label>
    </div>
  );
}

function ItemRail({ items, selectedId, onSelect, titleKey = 'title', subtitleKey, onAdd, addLabel = 'Add item' }) {
  return (
    <aside className={styles.itemRail}>
      <button className={styles.addItem} type="button" onClick={onAdd}>＋ {addLabel}</button>
      <div className={styles.itemRailList}>
        {items.map((item, index) => (
          <button className={selectedId === item.id ? styles.selectedItem : ''} type="button" onClick={() => onSelect(item.id)} key={item.id}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{item[titleKey] || 'Untitled'}</strong>
            {subtitleKey && <small>{item[subtitleKey]}</small>}
          </button>
        ))}
      </div>
    </aside>
  );
}

function ReorderActions({ index, length, onMove, onDelete }) {
  return (
    <div className={styles.reorderActions}>
      <button type="button" disabled={index === 0} onClick={() => onMove(-1)} aria-label="Move up">↑</button>
      <button type="button" disabled={index === length - 1} onClick={() => onMove(1)} aria-label="Move down">↓</button>
      <button className={styles.deleteButton} type="button" onClick={onDelete}>Delete</button>
    </div>
  );
}

function Overview({ sections, meta, onEdit }) {
  const counts = {
    projects: sections.projects.items.length,
    certificates: sections.certificates.items.length,
    journey: sections.journey.items.length,
    reviews: sections.reviews.items.length,
  };

  return (
    <div className={styles.overview}>
      <header className={styles.welcome}>
        <span>PORTFOLIO STUDIO</span>
        <h1>Everything in one quiet place.</h1>
        <p>Edit the portfolio, check what is live, then publish only when it feels right.</p>
      </header>

      <div className={styles.metricGrid}>
        <article><strong>{counts.projects}</strong><span>projects</span></article>
        <article><strong>{counts.certificates}</strong><span>certificates</span></article>
        <article><strong>{counts.journey}</strong><span>journey entries</span></article>
        <article><strong>{counts.reviews}</strong><span>reviews</span></article>
      </div>

      <section className={styles.sectionStatus}>
        <header><div><span>Publishing</span><h2>Your sections</h2></div><a href="/" target="_blank" rel="noreferrer">Open portfolio ↗</a></header>
        {Object.keys(sectionLabels).map((key) => (
          <button type="button" onClick={() => onEdit(key)} key={key}>
            <span className={meta[key]?.published_at ? styles.liveDot : styles.draftDot} />
            <strong>{sectionLabels[key]}</strong>
            <small>{meta[key]?.published_at ? `Live · ${new Date(meta[key].published_at).toLocaleDateString()}` : 'Using local portfolio content'}</small>
            <i>→</i>
          </button>
        ))}
      </section>
    </div>
  );
}

function SiteEditor({ value, onChange }) {
  const patch = (group, key, next) => onChange({ ...value, [group]: { ...value[group], [key]: next } });
  const kpis = value.about.kpis || [];
  return (
    <div className={styles.formSections}>
      <section><header><span>01</span><div><h2>Identity</h2><p>The details reused across the portfolio.</p></div></header><div className={styles.formGrid}>
        <TextField label="Display name" value={value.profile.displayName} onChange={(next) => patch('profile', 'displayName', next)} />
        <TextField label="Full name" value={value.profile.fullName} onChange={(next) => patch('profile', 'fullName', next)} />
        <TextField label="Location" value={value.profile.location} onChange={(next) => patch('profile', 'location', next)} />
        <TextField label="Education" value={value.profile.education} onChange={(next) => patch('profile', 'education', next)} />
        <TextField label="Email" type="email" value={value.profile.email} onChange={(next) => patch('profile', 'email', next)} />
        <TextField label="Availability" value={value.profile.status} onChange={(next) => patch('profile', 'status', next)} />
        <TextField label="GitHub URL" value={value.profile.github} onChange={(next) => patch('profile', 'github', next)} wide />
        <TextField label="LinkedIn URL" value={value.profile.linkedin} onChange={(next) => patch('profile', 'linkedin', next)} wide />
        <TextField label="Resume URL" value={value.profile.resumeUrl} onChange={(next) => patch('profile', 'resumeUrl', next)} wide />
        <div className={styles.wideField}><UploadField label="Upload a new resume" value={null} folder="resume" accept="application/pdf" onUploaded={(url) => patch('profile', 'resumeUrl', url)} /></div>
      </div></section>

      <section><header><span>02</span><div><h2>Hero</h2><p>Keep it short. The terminal should breathe.</p></div></header><div className={styles.formGrid}>
        <TextField label="Name" value={value.hero.title} onChange={(next) => patch('hero', 'title', next)} />
        <TextField label="One-line role" value={value.hero.role} onChange={(next) => patch('hero', 'role', next)} wide />
      </div></section>

      <section><header><span>03</span><div><h2>About</h2><p>The quick human introduction recruiters see first.</p></div></header><div className={styles.formGrid}>
        <TextField label="Section label" value={value.about.kicker} onChange={(next) => patch('about', 'kicker', next)} />
        <TextArea label="Heading" value={value.about.title} onChange={(next) => patch('about', 'title', next)} rows={2} hint="Use a new line where the heading should break." />
        <TextArea label="Profile card line" value={value.about.cardSummary} onChange={(next) => patch('about', 'cardSummary', next)} rows={2} />
        <TextArea label="Introduction" value={value.about.body} onChange={(next) => patch('about', 'body', next)} rows={5} />
        <div className={`${styles.kpiEditor} ${styles.wideField}`}>
          {kpis.map((kpi, index) => <div key={`${kpi.label}-${index}`}><input aria-label={`KPI ${index + 1} value`} value={kpi.value} onChange={(event) => patch('about', 'kpis', kpis.map((item, itemIndex) => itemIndex === index ? { ...item, value: event.target.value } : item))} /><input aria-label={`KPI ${index + 1} label`} value={kpi.label} onChange={(event) => patch('about', 'kpis', kpis.map((item, itemIndex) => itemIndex === index ? { ...item, label: event.target.value } : item))} /></div>)}
        </div>
      </div></section>

      <section><header><span>04</span><div><h2>Contact</h2><p>The invitation at the end of the portfolio.</p></div></header><div className={styles.formGrid}>
        <TextField label="Availability line" value={value.contact.availability} onChange={(next) => patch('contact', 'availability', next)} wide />
        <TextField label="Location line" value={value.contact.locationLine} onChange={(next) => patch('contact', 'locationLine', next)} wide />
        <TextArea label="Contact heading" value={value.contact.title} onChange={(next) => patch('contact', 'title', next)} rows={2} />
        <TextArea label="Contact message" value={value.contact.body} onChange={(next) => patch('contact', 'body', next)} rows={3} />
      </div></section>
    </div>
  );
}

function ProjectsEditor({ value, onChange }) {
  const [selectedId, setSelectedId] = useState(value.items[0]?.id);
  const items = value.items;
  const selectedIndex = Math.max(0, items.findIndex((item) => item.id === selectedId));
  const selected = items[selectedIndex];
  const setItems = (next) => onChange({ ...value, items: next });
  const update = (key, next) => setItems(items.map((item, index) => index === selectedIndex ? { ...item, [key]: next } : item));
  const add = () => {
    const id = newId('project');
    setItems([...items, { id, title: 'Untitled project', year: String(new Date().getFullYear()), category: 'Products + web', type: 'Project', description: '', role: '', problem: '', build: '', outcome: '', stack: [], website: '', source: '', thumbnail: null, gallery: [], featured: false, featuredOrder: null }]);
    setSelectedId(id);
  };
  const move = (direction) => {
    const nextIndex = selectedIndex + direction;
    if (nextIndex < 0 || nextIndex >= items.length) return;
    const next = [...items];
    [next[selectedIndex], next[nextIndex]] = [next[nextIndex], next[selectedIndex]];
    setItems(next);
  };
  const remove = () => {
    if (!window.confirm(`Delete ${selected.title}?`)) return;
    const next = items.filter((item) => item.id !== selected.id);
    setItems(next);
    setSelectedId(next[Math.min(selectedIndex, next.length - 1)]?.id);
  };

  if (!selected) return <button type="button" className={styles.emptyAdd} onClick={add}>Add your first project</button>;
  return (
    <div className={styles.splitEditor}>
      <ItemRail items={items} selectedId={selected.id} onSelect={setSelectedId} onAdd={add} addLabel="New project" />
      <div className={styles.editorPanel}>
        <div className={styles.editorToolbar}><Toggle checked={selected.featured} onChange={(next) => update('featured', next)} label="Featured on home" /><ReorderActions index={selectedIndex} length={items.length} onMove={move} onDelete={remove} /></div>
        <div className={styles.formGrid}>
          <TextField label="Project name" value={selected.title} onChange={(next) => update('title', next)} />
          <TextField label="URL slug" value={selected.id} onChange={(next) => { update('id', next); setSelectedId(next); }} hint="Lowercase letters and hyphens work best." />
          <TextField label="Year" value={selected.year} onChange={(next) => update('year', next)} />
          <TextField label="Category" value={selected.category} onChange={(next) => update('category', next)} />
          <TextField label="Project type" value={selected.type} onChange={(next) => update('type', next)} />
          <TextField label="Your role" value={selected.role} onChange={(next) => update('role', next)} />
          <TextArea label="Short description" value={selected.description} onChange={(next) => update('description', next)} rows={3} />
          <TextArea label="Problem" value={selected.problem} onChange={(next) => update('problem', next)} rows={4} />
          <TextArea label="What you built" value={selected.build} onChange={(next) => update('build', next)} rows={4} />
          <TextArea label="Outcome" value={selected.outcome} onChange={(next) => update('outcome', next)} rows={3} />
          <TextField label="Website" value={selected.website} onChange={(next) => update('website', next)} wide />
          <TextField label="Source" value={selected.source} onChange={(next) => update('source', next)} wide />
          <TextField label="Technology stack" value={(selected.stack || []).join(', ')} onChange={(next) => update('stack', splitTags(next))} hint="Separate technologies with commas." wide />
        </div>

        <section className={styles.mediaEditor}>
          <header><div><h3>Project media</h3><p>The thumbnail stays locked to the featured-project frame. Gallery images keep their natural ratio.</p></div></header>
          <UploadField label="Replace thumbnail" value={selected.thumbnail} folder={`projects/${selected.id}/thumbnail`} onUploaded={(url) => update('thumbnail', url)} />
          <UploadField label="Add gallery screenshots" value={null} folder={`projects/${selected.id}/gallery`} multiple onUploaded={(urls) => update('gallery', [...(selected.gallery || []), ...urls.map((image, index) => ({ image, caption: `${selected.title} interface ${(selected.gallery?.length || 0) + index + 1}` }))])} />
          <div className={styles.mediaGrid}>
            {(selected.gallery || []).map((media, index) => <article key={`${media.image}-${index}`}><img src={media.image} alt="" /><input value={media.caption || ''} aria-label={`Screenshot ${index + 1} caption`} onChange={(event) => update('gallery', selected.gallery.map((item, itemIndex) => itemIndex === index ? { ...item, caption: event.target.value } : item))} /><button type="button" onClick={() => update('gallery', selected.gallery.filter((_, itemIndex) => itemIndex !== index))}>Remove</button></article>)}
          </div>
        </section>
      </div>
    </div>
  );
}

function CarouselEditor({ value, onChange }) {
  const items = value.items || [];
  const setItems = (next) => onChange({ ...value, items: next });
  const addImages = (urls) => setItems([...items, ...urls.map((image, index) => ({ id: newId(`reel-${index}`), title: 'Project screenshot', image, fit: 'cover' }))]);
  const move = (index, direction) => {
    const target = index + direction;
    if (target < 0 || target >= items.length) return;
    const next = [...items];
    [next[index], next[target]] = [next[target], next[index]];
    setItems(next);
  };
  return <div className={styles.collectionEditor}><header className={styles.collectionIntro}><div><h2>Project screenshot reel</h2><p>Use landscape product screenshots here. The portfolio duplicates the sequence automatically for its continuous loop.</p></div><UploadField label="Add screenshots" value={null} folder="carousel" multiple onUploaded={addImages} /></header><div className={styles.carouselList}>{items.map((item, index) => <article key={item.id}><img src={item.image} alt="" /><div><input value={item.title || ''} aria-label={`Carousel item ${index + 1} title`} onChange={(event) => setItems(items.map((current, itemIndex) => itemIndex === index ? { ...current, title: event.target.value } : current))} /><select value={item.fit || 'cover'} onChange={(event) => setItems(items.map((current, itemIndex) => itemIndex === index ? { ...current, fit: event.target.value } : current))}><option value="cover">Fill frame</option><option value="contain">Show full image</option></select></div><ReorderActions index={index} length={items.length} onMove={(direction) => move(index, direction)} onDelete={() => setItems(items.filter((_, itemIndex) => itemIndex !== index))} /></article>)}</div></div>;
}

function JourneyEditor({ value, onChange }) {
  const [mode, setMode] = useState('timeline');
  const items = mode === 'timeline' ? value.items : value.gallery;
  const [selectedId, setSelectedId] = useState(items[0]?.id || '0');
  const withIds = items.map((item, index) => ({ ...item, id: item.id || `${mode}-${index}` }));
  const selectedIndex = Math.max(0, withIds.findIndex((item) => item.id === selectedId));
  const selected = withIds[selectedIndex];
  const setItems = (next) => onChange({ ...value, [mode === 'timeline' ? 'items' : 'gallery']: next });
  const update = (key, next) => setItems(withIds.map((item, index) => index === selectedIndex ? { ...item, [key]: next } : item));
  const add = () => {
    const id = newId(mode);
    const next = mode === 'timeline'
      ? { id, period: '2026', type: 'EXPERIENCE', title: 'New experience', organization: '', result: '', bullets: [] }
      : { id, organization: 'New gallery item', role: '', period: '2026', location: 'Philippines', mark: 'NEW', caption: '', href: '', linkLabel: 'View', image: null };
    setItems([...withIds, next]);
    setSelectedId(id);
  };
  const move = (direction) => {
    const target = selectedIndex + direction;
    if (target < 0 || target >= withIds.length) return;
    const next = [...withIds];
    [next[selectedIndex], next[target]] = [next[target], next[selectedIndex]];
    setItems(next);
  };
  const remove = () => {
    const next = withIds.filter((item) => item.id !== selected.id);
    setItems(next);
    setSelectedId(next[Math.min(selectedIndex, next.length - 1)]?.id);
  };

  return <div><div className={styles.segmented}><button className={mode === 'timeline' ? styles.activeSegment : ''} type="button" onClick={() => { setMode('timeline'); setSelectedId(value.items[0]?.id || 'timeline-0'); }}>Timeline</button><button className={mode === 'gallery' ? styles.activeSegment : ''} type="button" onClick={() => { setMode('gallery'); setSelectedId(value.gallery[0]?.id || 'gallery-0'); }}>Experience gallery</button></div>{selected ? <div className={styles.splitEditor}><ItemRail items={withIds} selectedId={selected.id} onSelect={setSelectedId} titleKey={mode === 'timeline' ? 'title' : 'organization'} subtitleKey="period" onAdd={add} addLabel={mode === 'timeline' ? 'New entry' : 'New photo'} /><div className={styles.editorPanel}><div className={styles.editorToolbar}><span /><ReorderActions index={selectedIndex} length={withIds.length} onMove={move} onDelete={remove} /></div><div className={styles.formGrid}>{mode === 'timeline' ? <>
    <TextField label="Period" value={selected.period} onChange={(next) => update('period', next)} /><TextField label="Type" value={selected.type} onChange={(next) => update('type', next)} /><TextField label="Title" value={selected.title} onChange={(next) => update('title', next)} wide /><TextField label="Organization" value={selected.organization} onChange={(next) => update('organization', next)} wide /><TextField label="Key result" value={selected.result} onChange={(next) => update('result', next)} wide /><TextArea label="Important points" value={(selected.bullets || []).join('\n')} onChange={(next) => update('bullets', splitLines(next))} hint="One point per line." />
  </> : <>
    <TextField label="Organization" value={selected.organization} onChange={(next) => update('organization', next)} /><TextField label="Role" value={selected.role} onChange={(next) => update('role', next)} /><TextField label="Period" value={selected.period} onChange={(next) => update('period', next)} /><TextField label="Location" value={selected.location} onChange={(next) => update('location', next)} /><TextArea label="Caption" value={selected.caption} onChange={(next) => update('caption', next)} rows={3} /><TextField label="External link" value={selected.href} onChange={(next) => update('href', next)} wide /><div className={styles.wideField}><UploadField label="Upload experience photo" value={selected.image} folder={`experience/${selected.id}`} onUploaded={(url) => update('image', url)} /></div>
  </>}</div></div></div> : <button type="button" className={styles.emptyAdd} onClick={add}>Add your first item</button>}</div>;
}

function ReviewsEditor({ value, onChange }) {
  const items = value.items || [];
  const [selectedId, setSelectedId] = useState(items[0]?.id);
  const index = Math.max(0, items.findIndex((item) => item.id === selectedId));
  const selected = items[index];
  const setItems = (next) => onChange({ ...value, items: next });
  const update = (key, next) => setItems(items.map((item, itemIndex) => itemIndex === index ? { ...item, [key]: next } : item));
  const add = () => { const id = newId('review'); setItems([...items, { id, label: 'New review', quote: '', person: '', role: '', profileUrl: '', image: null, status: 'Draft' }]); setSelectedId(id); };
  if (!selected) return <button className={styles.emptyAdd} type="button" onClick={add}>Add your first review</button>;
  return <div className={styles.splitEditor}><ItemRail items={items} selectedId={selected.id} onSelect={setSelectedId} titleKey="person" subtitleKey="label" onAdd={add} addLabel="New review" /><div className={styles.editorPanel}><div className={styles.editorToolbar}><span /><ReorderActions index={index} length={items.length} onMove={(direction) => { const target = index + direction; if (target < 0 || target >= items.length) return; const next = [...items]; [next[index], next[target]] = [next[target], next[index]]; setItems(next); }} onDelete={() => { const next = items.filter((item) => item.id !== selected.id); setItems(next); setSelectedId(next[Math.min(index, next.length - 1)]?.id); }} /></div><div className={styles.formGrid}><TextField label="Review label" value={selected.label} onChange={(next) => update('label', next)} /><TextField label="Status" value={selected.status} onChange={(next) => update('status', next)} /><TextArea label="Quote" value={selected.quote} onChange={(next) => update('quote', next)} rows={6} /><TextField label="Reviewer name" value={selected.person} onChange={(next) => update('person', next)} /><TextField label="Role / organization" value={selected.role} onChange={(next) => update('role', next)} wide /><TextField label="LinkedIn or profile URL" value={selected.profileUrl} onChange={(next) => update('profileUrl', next)} wide /><div className={styles.wideField}><UploadField label="Upload reviewer photo" value={selected.image} folder={`reviews/${selected.id}`} onUploaded={(url) => update('image', url)} /></div></div></div></div>;
}

function ToolkitEditor({ value, onChange }) {
  const items = value.items || [];
  const setItems = (next) => onChange({ ...value, items: next });
  return <div className={styles.simpleCards}><header><div><h2>Tech stack groups</h2><p>Keep each row focused. The logos are matched automatically by technology name.</p></div><button type="button" onClick={() => setItems([...items, { label: 'NEW', title: 'New group', items: [] }])}>＋ Add group</button></header>{items.map((group, index) => <article key={`${group.label}-${index}`}><div className={styles.formGrid}><TextField label="Internal label" value={group.label} onChange={(next) => setItems(items.map((item, itemIndex) => itemIndex === index ? { ...item, label: next } : item))} /><TextField label="Heading" value={group.title} onChange={(next) => setItems(items.map((item, itemIndex) => itemIndex === index ? { ...item, title: next } : item))} /><TextArea label="Technologies" value={group.items.join('\n')} onChange={(next) => setItems(items.map((item, itemIndex) => itemIndex === index ? { ...item, items: splitLines(next) } : item))} hint="One technology per line." /></div><ReorderActions index={index} length={items.length} onMove={(direction) => { const target = index + direction; if (target < 0 || target >= items.length) return; const next = [...items]; [next[index], next[target]] = [next[target], next[index]]; setItems(next); }} onDelete={() => setItems(items.filter((_, itemIndex) => itemIndex !== index))} /></article>)}</div>;
}

function CertificatesEditor({ value, onChange }) {
  const items = value.items || [];
  const [selectedId, setSelectedId] = useState(items[0]?.recordId);
  const keyed = items.map((item, itemIndex) => ({ ...item, recordId: item.recordId || `certificate-${itemIndex + 1}` }));
  const index = Math.max(0, keyed.findIndex((item) => item.recordId === selectedId));
  const selected = keyed[index];
  const setItems = (next) => onChange({ ...value, items: next });
  const update = (key, next) => setItems(keyed.map((item, itemIndex) => itemIndex === index ? { ...item, [key]: next } : item));
  const add = () => { const recordId = newId('certificate'); setItems([...keyed, { recordId, title: 'New certificate', issuer: '', issued: '', expires: '', id: '', category: 'ENGINEERING', featured: false, image: null, verifyUrl: '' }]); setSelectedId(recordId); };
  if (!selected) return <button className={styles.emptyAdd} type="button" onClick={add}>Add your first certificate</button>;
  return <div className={styles.splitEditor}><ItemRail items={keyed.map((item) => ({ ...item, id: item.recordId }))} selectedId={selected.recordId} onSelect={setSelectedId} subtitleKey="issuer" onAdd={add} addLabel="New certificate" /><div className={styles.editorPanel}><div className={styles.editorToolbar}><Toggle checked={selected.featured} onChange={(next) => update('featured', next)} label="Feature certificate" /><ReorderActions index={index} length={keyed.length} onMove={(direction) => { const target = index + direction; if (target < 0 || target >= keyed.length) return; const next = [...keyed]; [next[index], next[target]] = [next[target], next[index]]; setItems(next); }} onDelete={() => { const next = keyed.filter((_, itemIndex) => itemIndex !== index); setItems(next); setSelectedId(next[Math.min(index, next.length - 1)]?.recordId); }} /></div><div className={styles.formGrid}><TextField label="Certificate title" value={selected.title} onChange={(next) => update('title', next)} wide /><TextField label="Issuer" value={selected.issuer} onChange={(next) => update('issuer', next)} /><TextField label="Category" value={selected.category} onChange={(next) => update('category', next)} /><TextField label="Issued" value={selected.issued} onChange={(next) => update('issued', next)} /><TextField label="Expires" value={selected.expires} onChange={(next) => update('expires', next)} /><TextField label="Credential ID" value={selected.id} onChange={(next) => update('id', next)} wide /><TextField label="Verification URL" value={selected.verifyUrl} onChange={(next) => update('verifyUrl', next)} wide /><div className={styles.wideField}><UploadField label="Upload certificate image" value={selected.image} folder="certificates" onUploaded={(url) => update('image', url)} /></div></div></div></div>;
}

function LoginScreen({ onSession }) {
  const [email, setEmail] = useState(adminEmail);
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const sendLink = async (event) => {
    event.preventDefault();
    if (email.trim().toLowerCase() !== adminEmail) {
      setMessage('This studio only accepts Kyann’s administrator email.');
      return;
    }
    setSending(true);
    const { error } = await supabase.auth.signInWithOtp({
      email: adminEmail,
      options: { emailRedirectTo: `${window.location.origin}/studio/`, shouldCreateUser: true },
    });
    setSending(false);
    setMessage(error ? error.message : 'Check your inbox. The private sign-in link is ready.');
  };
  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_event, session) => onSession(session));
    return () => data.subscription.unsubscribe();
  }, [onSession]);
  return <main className={styles.loginPage}><a className={styles.loginBrand} href="/">KT<span>/studio</span></a><section className={styles.loginCard}><span className={styles.lockMark}>//</span><p>PRIVATE PORTFOLIO STUDIO</p><h1>Just you and the work.</h1><span>Edit projects, photos, experience, reviews, certificates, and the details around them.</span><form onSubmit={sendLink}><label>Email<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} /></label><button type="submit" disabled={sending}>{sending ? 'Sending…' : 'Email me a sign-in link'}</button></form>{message && <output>{message}</output>}<small>No public account creation. Only {adminEmail} can publish.</small></section></main>;
}

export default function StudioPage() {
  const [session, setSession] = useState(null);
  const [checkingSession, setCheckingSession] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [sections, setSections] = useState(cloneDefaultSections);
  const [meta, setMeta] = useState({});
  const [dirty, setDirty] = useState({});
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    if (!supabase) { setCheckingSession(false); return undefined; }
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); setCheckingSession(false); });
    const { data } = supabase.auth.onAuthStateChange((_event, nextSession) => setSession(nextSession));
    return () => data.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session || session.user.email !== adminEmail) return;
    setBusy(true);
    loadAdminSections()
      .then((rows) => {
        const drafts = Object.fromEntries(rows.map((row) => [row.section_key, row.draft_content]));
        setSections(mergePortfolioSections(drafts));
        setMeta(Object.fromEntries(rows.map((row) => [row.section_key, row])));
      })
      .catch((error) => setNotice(error.message))
      .finally(() => setBusy(false));
  }, [session]);

  const currentSection = activeTab === 'overview' ? null : activeTab;
  const updateSection = (key, value) => {
    setSections((current) => ({ ...current, [key]: value }));
    setDirty((current) => ({ ...current, [key]: true }));
  };
  const save = async () => {
    if (!currentSection) return;
    setBusy(true); setNotice('');
    try {
      await saveDraft(currentSection, sections[currentSection], session.user.id);
      setDirty((current) => ({ ...current, [currentSection]: false }));
      setNotice(`${sectionLabels[currentSection]} draft saved.`);
    } catch (error) { setNotice(error.message); } finally { setBusy(false); }
  };
  const publish = async () => {
    if (!currentSection) return;
    setBusy(true); setNotice('');
    try {
      const publishedAt = await publishSection(currentSection, sections[currentSection], session.user.id);
      setMeta((current) => ({ ...current, [currentSection]: { ...current[currentSection], published_at: publishedAt } }));
      setDirty((current) => ({ ...current, [currentSection]: false }));
      setNotice(`${sectionLabels[currentSection]} is live.`);
    } catch (error) { setNotice(error.message); } finally { setBusy(false); }
  };
  const publishEverything = async () => {
    setBusy(true); setNotice('');
    try {
      for (const key of Object.keys(sectionLabels)) await publishSection(key, sections[key], session.user.id);
      const now = new Date().toISOString();
      setMeta(Object.fromEntries(Object.keys(sectionLabels).map((key) => [key, { published_at: now }])));
      setDirty({});
      setNotice('The complete portfolio is live.');
    } catch (error) { setNotice(error.message); } finally { setBusy(false); }
  };

  const editor = useMemo(() => {
    if (activeTab === 'site') return <SiteEditor value={sections.site} onChange={(value) => updateSection('site', value)} />;
    if (activeTab === 'projects') return <ProjectsEditor value={sections.projects} onChange={(value) => updateSection('projects', value)} />;
    if (activeTab === 'carousel') return <CarouselEditor value={sections.carousel} onChange={(value) => updateSection('carousel', value)} />;
    if (activeTab === 'journey') return <JourneyEditor value={sections.journey} onChange={(value) => updateSection('journey', value)} />;
    if (activeTab === 'reviews') return <ReviewsEditor value={sections.reviews} onChange={(value) => updateSection('reviews', value)} />;
    if (activeTab === 'toolkit') return <ToolkitEditor value={sections.toolkit} onChange={(value) => updateSection('toolkit', value)} />;
    if (activeTab === 'certificates') return <CertificatesEditor value={sections.certificates} onChange={(value) => updateSection('certificates', value)} />;
    return <Overview sections={sections} meta={meta} onEdit={setActiveTab} />;
  }, [activeTab, meta, sections]);

  if (!isSupabaseConfigured) return <main className={styles.setupPage}><h1>Studio setup is incomplete.</h1><p>Add the Supabase public URL and publishable key to the portfolio environment.</p></main>;
  if (checkingSession) return <main className={styles.loadingPage}><span>//</span><p>Opening studio…</p></main>;
  if (!session) return <LoginScreen onSession={setSession} />;
  if (session.user.email !== adminEmail) return <main className={styles.setupPage}><h1>This account cannot open the studio.</h1><button type="button" onClick={() => supabase.auth.signOut()}>Sign out</button></main>;

  return (
    <main className={styles.studio}>
      <aside className={styles.sidebar}>
        <a className={styles.brand} href="/"><i>//</i><span>Portfolio Studio<small>Kyann Tagle</small></span></a>
        <nav aria-label="Studio sections">{tabs.map(([key, label], index) => <button className={activeTab === key ? styles.activeTab : ''} type="button" onClick={() => setActiveTab(key)} key={key}><span>{index ? String(index).padStart(2, '0') : '⌂'}</span>{label}{dirty[key] && <i aria-label="Unsaved changes" />}</button>)}</nav>
        <div className={styles.sidebarBottom}><a href="/" target="_blank" rel="noreferrer">View portfolio ↗</a><button type="button" onClick={() => supabase.auth.signOut()}>Sign out</button></div>
      </aside>

      <section className={styles.workspace}>
        <header className={styles.workspaceBar}>
          <div><span>{activeTab === 'overview' ? 'Portfolio Studio' : sectionLabels[activeTab]}</span>{currentSection && <small>{dirty[currentSection] ? 'Unsaved changes' : meta[currentSection]?.published_at ? 'Published' : 'Local content'}</small>}</div>
          <div>{activeTab === 'overview' ? <button className={styles.publishButton} type="button" onClick={publishEverything} disabled={busy}>Publish everything</button> : <><button className={styles.saveButton} type="button" onClick={save} disabled={busy || !dirty[currentSection]}>Save draft</button><button className={styles.publishButton} type="button" onClick={publish} disabled={busy}>Publish</button></>}</div>
        </header>
        {notice && <div className={styles.notice} role="status">{notice}<button type="button" onClick={() => setNotice('')}>×</button></div>}
        <div className={styles.workspaceBody}>{busy && !currentSection ? <div className={styles.inlineLoading}>Loading your portfolio…</div> : editor}</div>
      </section>
    </main>
  );
}
