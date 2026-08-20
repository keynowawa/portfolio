create table if not exists public.portfolio_sections (
  section_key text primary key,
  draft_content jsonb not null default '{}'::jsonb,
  published_content jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default timezone('utc', now()),
  published_at timestamptz,
  updated_by uuid references auth.users(id) on delete set null,
  constraint portfolio_sections_key_length check (char_length(section_key) between 1 and 80)
);

alter table public.portfolio_sections enable row level security;

create or replace function public.is_portfolio_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select coalesce(auth.jwt() ->> 'email', '') = 'info.keyno@gmail.com';
$$;

revoke all on function public.is_portfolio_admin() from public;
grant execute on function public.is_portfolio_admin() to authenticated;

drop policy if exists "portfolio admin select" on public.portfolio_sections;
create policy "portfolio admin select"
on public.portfolio_sections for select
to authenticated
using (public.is_portfolio_admin());

drop policy if exists "portfolio admin insert" on public.portfolio_sections;
create policy "portfolio admin insert"
on public.portfolio_sections for insert
to authenticated
with check (public.is_portfolio_admin());

drop policy if exists "portfolio admin update" on public.portfolio_sections;
create policy "portfolio admin update"
on public.portfolio_sections for update
to authenticated
using (public.is_portfolio_admin())
with check (public.is_portfolio_admin());

drop policy if exists "portfolio admin delete" on public.portfolio_sections;
create policy "portfolio admin delete"
on public.portfolio_sections for delete
to authenticated
using (public.is_portfolio_admin());

create or replace view public.portfolio_public
with (security_invoker = false)
as
select section_key, published_content as content, published_at
from public.portfolio_sections
where published_at is not null;

revoke all on public.portfolio_public from public;
grant select on public.portfolio_public to anon, authenticated;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'portfolio-media',
  'portfolio-media',
  true,
  10485760,
  array['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'application/pdf']
)
on conflict (id) do update
set public = excluded.public,
    file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "portfolio media public read" on storage.objects;
create policy "portfolio media public read"
on storage.objects for select
to public
using (bucket_id = 'portfolio-media');

drop policy if exists "portfolio admin media insert" on storage.objects;
create policy "portfolio admin media insert"
on storage.objects for insert
to authenticated
with check (bucket_id = 'portfolio-media' and public.is_portfolio_admin());

drop policy if exists "portfolio admin media update" on storage.objects;
create policy "portfolio admin media update"
on storage.objects for update
to authenticated
using (bucket_id = 'portfolio-media' and public.is_portfolio_admin())
with check (bucket_id = 'portfolio-media' and public.is_portfolio_admin());

drop policy if exists "portfolio admin media delete" on storage.objects;
create policy "portfolio admin media delete"
on storage.objects for delete
to authenticated
using (bucket_id = 'portfolio-media' and public.is_portfolio_admin());

