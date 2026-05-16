"use client";

/**
 * IdentityLabFaq — Accessible accordion FAQ for the Identity Lab page.
 *
 * Uses the CSS grid-template-rows: 0fr / 1fr trick for smooth height
 * animation without JS height measurement. Each answer is a string with
 * paragraphs separated by \n\n so all data stays JSON-serializable across
 * the Server→Client boundary.
 */

import { useState } from "react";

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
                  <p key={j}>{para}</p>
                ))}
              </div>
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
