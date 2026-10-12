"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";
import { dl } from "@/lib/motion";

const KINDS = ["Web app", "Website or store", "Backend & API", "Interactive / motion", "Something else"];

const field = "flex flex-col gap-2";
const input =
  "min-h-12 border-2 border-line bg-transparent px-4 py-3 text-[16px] text-fg transition-colors placeholder:text-muted focus:border-fg focus:outline-none";

/**
 * There's no backend here on purpose: the form drafts an email in the
 * visitor's own mail app, so nothing is collected or stored by this site.
 */
export default function ContactForm() {
  const [kind, setKind] = useState(KINDS[0]);
  const [drafted, setDrafted] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const about = String(data.get("about") || "").trim();
    const subject = `${kind}${name ? ` — from ${name}` : ""}`;
    const body = `${about}\n\n— ${name || "Sent from your portfolio"}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDrafted(true);
  };

  return (
    <form onSubmit={submit} className="flex flex-col gap-7">
      <div data-reveal="up" style={dl(300)} className={field}>
        <label htmlFor="name" className="label">
          Your name
        </label>
        <input id="name" name="name" autoComplete="name" placeholder="How should I address you?" className={input} />
      </div>

      <fieldset data-reveal="up" style={dl(380)} className={field}>
        <legend className="label mb-2">What do you need?</legend>
        <div className="flex flex-wrap border-t-2 border-l-2 border-line">
          {KINDS.map((k) => (
            <label
              key={k}
              className={`cursor-pointer border-r-2 border-b-2 border-line px-4 py-3 text-[14px] transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-accent ${
                kind === k ? "bg-accent-fill text-paper" : "hover:bg-surface"
              }`}
            >
              <input
                type="radio"
                name="kind"
                value={k}
                checked={kind === k}
                onChange={() => setKind(k)}
                className="sr-only"
              />
              {k}
            </label>
          ))}
        </div>
      </fieldset>

      <div data-reveal="up" style={dl(460)} className={field}>
        <label htmlFor="about" className="label">
          About the project
        </label>
        <textarea
          id="about"
          name="about"
          required
          rows={6}
          placeholder="What are you building, who is it for, and when does it need to ship?"
          className={`${input} min-h-40 resize-y`}
        />
      </div>

      <div data-reveal="up" style={dl(540)} className="flex flex-col gap-4">
        <span data-magnetic="" className="self-start">
          <button type="submit" className="btn btn-primary min-w-[280px] px-[22px] py-[18px] text-[17px]">
            Draft the email <span className="arrow">→</span>
          </button>
        </span>
        <p className="text-[14px] text-muted" aria-live="polite">
          {drafted
            ? `Your mail app should have opened with everything filled in. If it didn't, write to ${site.email}.`
            : "Opens your own email app with this filled in — nothing is stored here."}
        </p>
      </div>
    </form>
  );
}
