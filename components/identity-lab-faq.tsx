"use client";

/**
 * IdentityLabFaq — Accessible accordion FAQ for the Identity Lab page.
 *
 * Uses the CSS grid-template-rows: 0fr / 1fr trick for smooth height
 * animation without JS height measurement. Each answer is a string with
 * paragraphs separated by \n\n so all data stays JSON-serializable across
 * the Server→Client boundary.
 */

import { useState, type ReactNode } from "react";

const EMAIL_PATTERN = /[\w.-]+@[\w.-]+\.\w+/g;

/** Renders a paragraph as text with any email addresses turned into mailto links. */
function linkifyEmails(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = EMAIL_PATTERN.exec(text))) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    nodes.push(
      <a key={match.index} href={`mailto:${match[0]}`}>
        {match[0]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

export type FaqItem = {
  q: string;
  /** Paragraphs separated by \n\n — rendered as <p> elements */
  a: string;
  /** Optional badge displayed beside the question */
  badge?: string;
};

export function IdentityLabFaq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <dl className="il-faq-list">
      {items.map((item, i) => {
        const isOpen = open === i;
        const id = `il-faq-answer-${i}`;
        return (
          <div
            key={i}
            className={`il-faq-item${isOpen ? " il-faq-open" : ""}`}
          >
            <dt>
              <button
                type="button"
                className="il-faq-btn"
                aria-expanded={isOpen}
                aria-controls={id}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="il-faq-q">{item.q}</span>
                {item.badge && (
                  <span className="il-faq-badge" aria-label={`Note: ${item.badge}`}>
                    {item.badge}
                  </span>
                )}
                <span className="il-faq-icon" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </dt>
            <dd id={id} className="il-faq-dd" aria-hidden={!isOpen}>
              <div className="il-faq-inner">
                {item.a.split("\n\n").map((para, j) => (
                  <p key={j}>{linkifyEmails(para)}</p>
                ))}
              </div>
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
