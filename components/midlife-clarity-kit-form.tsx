"use client";

import { useEffect, useRef } from "react";

const KIT_FORM_UID = "62b878a91d";
const KIT_FORM_SRC = "https://sparklifelab.kit.com/62b878a91d/index.js";
const FIRST_NAME_LABEL = "First name";
const EMAIL_ADDRESS_LABEL = "Email address";

function updateInputLabel(input: HTMLInputElement | null, label: string) {
  if (!input) {
    return;
  }

  if (input.placeholder !== label) {
    input.placeholder = label;
  }

  if (input.getAttribute("aria-label") !== label) {
    input.setAttribute("aria-label", label);
  }
}

function normalizeKitForm(container: HTMLDivElement) {
  const firstNameInput = container.querySelector<HTMLInputElement>(
    'input[name="fields[first_name]"]'
  );
  const emailInput = container.querySelector<HTMLInputElement>('input[name="email_address"]');

  updateInputLabel(firstNameInput, FIRST_NAME_LABEL);
  updateInputLabel(emailInput, EMAIL_ADDRESS_LABEL);
}

export function MidlifeClarityKitForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    container.innerHTML = "";

    const normalize = () => normalizeKitForm(container);
    const observer = new MutationObserver(normalize);
    const timers = [0, 500, 1500].map((delay) => window.setTimeout(normalize, delay));

    observer.observe(container, {
      attributeFilter: ["aria-label", "placeholder"],
      attributes: true,
      childList: true,
      subtree: true,
    });

    const script = document.createElement("script");
    script.async = true;
    script.dataset.uid = KIT_FORM_UID;
    script.src = KIT_FORM_SRC;

    container.appendChild(script);

    return () => {
      observer.disconnect();
      timers.forEach((timer) => window.clearTimeout(timer));
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="sll-midlife-kit-form"
      aria-label="Midlife Clarity Check signup form"
    />
  );
}
