"use client";

import { PortfolioProvider } from "@/context/PortfolioContext";
import { EditorAuthProvider } from "@/context/EditorAuthContext";
import { SiteEditor } from "./SiteEditor";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PortfolioProvider>
      <EditorAuthProvider>
        {children}
        <SiteEditor />
      </EditorAuthProvider>
    </PortfolioProvider>
  );
}
