export const AUTH_SESSION_KEY = "rasheed-editor-session";
const SESSION_MS = 12 * 60 * 60 * 1000; // 12 hours

export async function hashPassword(password: string): Promise<string> {
  const data = new TextEncoder().encode(password);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function getExpectedPasswordHash(): string | null {
  const hash = process.env.NEXT_PUBLIC_EDITOR_PASSWORD_HASH?.trim();
  return hash || null;
}

export function isEditorConfigured(): boolean {
  return Boolean(getExpectedPasswordHash());
}

export function isEditorSessionValid(): boolean {
  try {
    const raw = sessionStorage.getItem(AUTH_SESSION_KEY);
    if (!raw) return false;
    const { expiresAt } = JSON.parse(raw) as { expiresAt: number };
    return Date.now() < expiresAt;
  } catch {
    return false;
  }
}

export function saveEditorSession(): void {
  sessionStorage.setItem(
    AUTH_SESSION_KEY,
    JSON.stringify({ expiresAt: Date.now() + SESSION_MS })
  );
}

export function clearEditorSession(): void {
  sessionStorage.removeItem(AUTH_SESSION_KEY);
}

export async function verifyEditorPassword(password: string): Promise<boolean> {
  const expected = getExpectedPasswordHash();
  if (!expected) return false;
  const inputHash = await hashPassword(password);
  return inputHash === expected;
}
