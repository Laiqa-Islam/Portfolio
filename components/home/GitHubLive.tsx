import SectionMeta from "@/components/ui/SectionMeta";
import { projects } from "@/data/projects";
import type { GitHubSnapshot } from "@/lib/github";
import { dl } from "@/lib/motion";
import { timeAgo } from "@/lib/time";

const CELL =
  "group flex min-h-[220px] flex-col gap-3 border-r-2 border-b-2 border-line p-5 transition-colors hover:bg-surface";

/** Real, current activity — fetched from the GitHub API and refreshed hourly. */
export default function GitHubLive({ data }: { data: GitHubSnapshot }) {
  const now = data.fetchedAt;
  // Repos rarely carry descriptions; fall back to the matching project's summary.
  const summaryFor = (url: string) =>
    projects.find((p) => p.repoUrl?.toLowerCase() === url.toLowerCase())?.summary ?? null;
  return (
    <section className="px-5 pt-18 md:px-8">
      <SectionMeta no="07" title="Recently on GitHub" meta={[`${data.publicRepos} public repos`, "Live from the API"]} />
      <div className="grid grid-cols-1 border-t-2 border-l-2 border-line md:grid-cols-2 lg:grid-cols-4">
        {data.recent.map((r, i) => (
          <a
            key={r.name}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal="up"
            style={dl(i * 100)}
            data-cursor="Repo"
            className={CELL}
          >
            <span className="label flex items-center gap-2 text-accent-text">
              <span className="h-2 w-2 bg-accent" />
              {r.language ?? "Repository"}
            </span>
            <span className="text-[26px] leading-[1.05] font-extrabold tracking-[-0.03em] break-words">{r.name}</span>
            {(r.description ?? summaryFor(r.url)) && (
              <span className="line-clamp-3 text-[14px] text-muted">{r.description ?? summaryFor(r.url)}</span>
            )}
            <span className="mt-auto text-[12px] text-muted">
              Pushed {timeAgo(r.pushedAt, now)} <span className="inline-block transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
            </span>
          </a>
        ))}
        {data.latestCommit && (
          <a
            href={data.latestCommit.url}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal="up"
            style={dl(data.recent.length * 100)}
            data-cursor="Commit"
            className={`${CELL} bg-surface`}
          >
            <span className="label flex items-center gap-2 text-accent-text">
              <span className="pulse" />
              Latest commit
            </span>
            <span className="font-mono text-[22px] font-bold">{data.latestCommit.sha}</span>
            <span className="line-clamp-3 font-mono text-[13px]">{data.latestCommit.message}</span>
            <span className="mt-auto text-[12px] text-muted">
              {timeAgo(data.latestCommit.date, now)} · {data.latestCommit.repo}
            </span>
          </a>
        )}
      </div>
    </section>
  );
}
