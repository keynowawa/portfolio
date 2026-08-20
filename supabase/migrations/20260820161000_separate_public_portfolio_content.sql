drop view if exists public.portfolio_public;

drop policy if exists "portfolio admin select" on public.portfolio_sections;
drop policy if exists "portfolio admin insert" on public.portfolio_sections;
drop policy if exists "portfolio admin update" on public.portfolio_sections;
drop policy if exists "portfolio admin delete" on public.portfolio_sections;
drop policy if exists "portfolio admin media insert" on storage.objects;
drop policy if exists "portfolio admin media update" on storage.objects;
drop policy if exists "portfolio admin media delete" on storage.objects;

revoke all on function public.is_portfolio_admin() from public, anon, authenticated;
drop function if exists public.is_portfolio_admin();

create policy "portfolio admin select" on public.portfolio_sections for select to authenticated
using ((select auth.jwt() ->> 'email') = 'info.keyno@gmail.com');
create policy "portfolio admin insert" on public.portfolio_sections for insert to authenticated
with check ((select auth.jwt() ->> 'email') = 'info.keyno@gmail.com');
create policy "portfolio admin update" on public.portfolio_sections for update to authenticated
using ((select auth.jwt() ->> 'email') = 'info.keyno@gmail.com')
with check ((select auth.jwt() ->> 'email') = 'info.keyno@gmail.com');
create policy "portfolio admin delete" on public.portfolio_sections for delete to authenticated
using ((select auth.jwt() ->> 'email') = 'info.keyno@gmail.com');

create index if not exists portfolio_sections_updated_by_idx on public.portfolio_sections(updated_by);

create table if not exists public.portfolio_published (
  section_key text primary key,
  content jsonb not null default '{}'::jsonb,
  published_at timestamptz not null default timezone('utc', now()),
  updated_by uuid references auth.users(id) on delete set null,
  constraint portfolio_published_key_length check (char_length(section_key) between 1 and 80)
);
alter table public.portfolio_published enable row level security;
create index if not exists portfolio_published_updated_by_idx on public.portfolio_published(updated_by);

create policy "portfolio published public read" on public.portfolio_published for select to anon, authenticated using (true);
create policy "portfolio admin published insert" on public.portfolio_published for insert to authenticated
with check ((select auth.jwt() ->> 'email') = 'info.keyno@gmail.com');
create policy "portfolio admin published update" on public.portfolio_published for update to authenticated
using ((select auth.jwt() ->> 'email') = 'info.keyno@gmail.com')
with check ((select auth.jwt() ->> 'email') = 'info.keyno@gmail.com');
create policy "portfolio admin published delete" on public.portfolio_published for delete to authenticated
using ((select auth.jwt() ->> 'email') = 'info.keyno@gmail.com');

create policy "portfolio admin media insert" on storage.objects for insert to authenticated
with check (bucket_id = 'portfolio-media' and (select auth.jwt() ->> 'email') = 'info.keyno@gmail.com');
create policy "portfolio admin media update" on storage.objects for update to authenticated
using (bucket_id = 'portfolio-media' and (select auth.jwt() ->> 'email') = 'info.keyno@gmail.com')
with check (bucket_id = 'portfolio-media' and (select auth.jwt() ->> 'email') = 'info.keyno@gmail.com');
create policy "portfolio admin media delete" on storage.objects for delete to authenticated
using (bucket_id = 'portfolio-media' and (select auth.jwt() ->> 'email') = 'info.keyno@gmail.com');

