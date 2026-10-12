import { site } from "@/data/site";

type ApiRepo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  pushed_at: string;
  fork: boolean;
};

type ApiCommit = {
  sha: string;
  html_url: string;
  commit: { message: string; author: { date: string } | null };
};

export type RecentRepo = {
  name: string;
  url: string;
  description: string | null;
  language: string | null;
  pushedAt: string;
};

export type GitHubSnapshot = {
  /** When this snapshot was taken; "x ago" labels are relative to it. */
  fetchedAt: number;
  publicRepos: number;
  languages: number;
  recent: RecentRepo[];
  latestCommit: {
    sha: string;
    message: string;
    url: string;
    repo: string;
    date: string;
  } | null;
};

/** Revalidated hourly — two unauthenticated calls an hour is well under the rate limit. */
async function gh<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`https://api.github.com${path}`, {
      headers: {
        Accept: "application/vnd.github+json",
        ...(process.env.GITHUB_TOKEN
          ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          : {}),
      },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

/**
 * Public activity for the "Recently on GitHub" section. Only repositories
 * owned by the account are listed. Returns null when GitHub is unreachable
 * so the page can render without the section.
 */
export async function getGitHubSnapshot(): Promise<GitHubSnapshot | null> {
  const repos = await gh<ApiRepo[]>(
    `/users/${site.githubUser}/repos?per_page=100&sort=pushed`
  );
  if (!repos || repos.length === 0) return null;

  const own = repos.filter((r) => !r.fork);
  const languages = new Set(own.map((r) => r.language).filter(Boolean)).size;

  const head = own[0];
  const commits = await gh<ApiCommit[]>(
    `/repos/${site.githubUser}/${head.name}/commits?per_page=1`
  );
  const c = commits?.[0];

  return {
    fetchedAt: Date.now(),
    publicRepos: own.length,
    languages,
    recent: own.slice(0, 3).map((r) => ({
      name: r.name,
      url: r.html_url,
      description: r.description,
      language: r.language,
      pushedAt: r.pushed_at,
    })),
    latestCommit: c
      ? {
          sha: c.sha.slice(0, 7),
          message: c.commit.message.split("\n")[0],
          url: c.html_url,
          repo: head.name,
          date: c.commit.author?.date ?? head.pushed_at,
        }
      : null,
  };
}
