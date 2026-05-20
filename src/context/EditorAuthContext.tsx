"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  clearEditorSession,
  isEditorConfigured,
  isEditorSessionValid,
  saveEditorSession,
  verifyEditorPassword,
} from "@/lib/editorAuth";

interface EditorAuthContextValue {
  configured: boolean;
  authenticated: boolean;
  login: (password: string) => Promise<boolean>;
  logout: () => void;
}

const EditorAuthContext = createContext<EditorAuthContextValue | null>(null);

export function EditorAuthProvider({ children }: { children: ReactNode }) {
  const [configured] = useState(isEditorConfigured);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setAuthenticated(isEditorSessionValid());
  }, []);

  const login = useCallback(async (password: string) => {
    const ok = await verifyEditorPassword(password);
    if (ok) {
      saveEditorSession();
      setAuthenticated(true);
    }
    return ok;
  }, []);

  const logout = useCallback(() => {
    clearEditorSession();
    setAuthenticated(false);
  }, []);

  return (
    <EditorAuthContext.Provider
      value={{ configured, authenticated, login, logout }}
    >
      {children}
    </EditorAuthContext.Provider>
  );
}

export function useEditorAuth() {
  const ctx = useContext(EditorAuthContext);
  if (!ctx) throw new Error("useEditorAuth requires EditorAuthProvider");
  return ctx;
}
