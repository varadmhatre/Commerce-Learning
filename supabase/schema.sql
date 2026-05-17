create extension if not exists "uuid-ossp";

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  avatar_url text,
  xp integer not null default 0,
  streak integer not null default 0,
  level integer not null default 1,
  last_active_at timestamptz default now(),
  created_at timestamptz default now()
);

create table public.chapters (
  id text primary key,
  title text not null,
  pillar text not null,
  difficulty text not null check (difficulty in ('beginner','intermediate','advanced')),
  minutes integer not null,
  xp integer not null,
  content jsonb not null default '{}'::jsonb,
  created_at timestamptz default now()
);

create table public.user_progress (
  user_id uuid references public.profiles(id) on delete cascade,
  chapter_id text references public.chapters(id) on delete cascade,
  status text not null default 'not_started' check (status in ('not_started','in_progress','completed')),
  score integer default 0,
  completed_at timestamptz,
  updated_at timestamptz default now(),
  primary key (user_id, chapter_id)
);

create table public.notes (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles(id) on delete cascade,
  chapter_id text references public.chapters(id) on delete cascade,
  body text not null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table public.bookmarks (
  user_id uuid references public.profiles(id) on delete cascade,
  chapter_id text references public.chapters(id) on delete cascade,
  created_at timestamptz default now(),
  primary key (user_id, chapter_id)
);

create table public.flashcard_reviews (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles(id) on delete cascade,
  chapter_id text references public.chapters(id) on delete cascade,
  front text not null,
  back text not null,
  ease numeric not null default 2.5,
  interval_days integer not null default 1,
  due_at timestamptz not null default now(),
  last_reviewed_at timestamptz
);

create table public.achievements (
  id text primary key,
  title text not null,
  description text not null,
  xp_reward integer not null default 0
);

create table public.user_achievements (
  user_id uuid references public.profiles(id) on delete cascade,
  achievement_id text references public.achievements(id) on delete cascade,
  unlocked_at timestamptz default now(),
  primary key (user_id, achievement_id)
);

alter table public.profiles enable row level security;
alter table public.user_progress enable row level security;
alter table public.notes enable row level security;
alter table public.bookmarks enable row level security;
alter table public.flashcard_reviews enable row level security;
alter table public.user_achievements enable row level security;

create policy "Users read own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users update own profile" on public.profiles for update using (auth.uid() = id);
create policy "Users manage own progress" on public.user_progress for all using (auth.uid() = user_id);
create policy "Users manage own notes" on public.notes for all using (auth.uid() = user_id);
create policy "Users manage own bookmarks" on public.bookmarks for all using (auth.uid() = user_id);
create policy "Users manage own reviews" on public.flashcard_reviews for all using (auth.uid() = user_id);
create policy "Users read own achievements" on public.user_achievements for select using (auth.uid() = user_id);
