import { permanentRedirect } from "next/navigation";

// Legacy route — the canonical Legal Notice now lives at /legal-note/.
// next.config.ts also issues a 308 redirect at the edge; this is a
// belt-and-suspenders redirect for any direct render of the route.
export default function ImpressumPage() {
  permanentRedirect("/legal-note/");
}
