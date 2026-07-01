"use client";

import { useEffect, useRef } from "react";

const KIT_FORM_UID = "fed36a3d05";
const KIT_FORM_SRC = "https://sparklifelab.kit.com/fed36a3d05/index.js";

export function IdentityWaitlistKitForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    container.innerHTML = "";

    const script = document.createElement("script");
    script.async = true;
    script.dataset.uid = KIT_FORM_UID;
    script.src = KIT_FORM_SRC;

    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="sll-identity-waitlist-kit-form"
      aria-label="Identity Lab waitlist signup form"
    />
  );
}
