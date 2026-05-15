import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

// Called when the Presentation Tool overlay is closed or the user exits preview.
export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const redirectTo = searchParams.get("redirect") ?? "/";

  const draft = await draftMode();
  draft.disable();

  return redirect(redirectTo) as Promise<Response>;
}
