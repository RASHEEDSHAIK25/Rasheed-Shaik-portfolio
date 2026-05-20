"use client";

import { useEffect, useState } from "react";

export function TypingText({ texts, speed = 55 }: { texts: string[]; speed?: number }) {
  const [display, setDisplay] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex % texts.length];
    const timeout = window.setTimeout(
      () => {
        if (!deleting) {
          if (charIndex < current.length) {
            setDisplay(current.slice(0, charIndex + 1));
            setCharIndex((c) => c + 1);
          } else {
            window.setTimeout(() => setDeleting(true), 1800);
          }
        } else if (charIndex > 0) {
          setDisplay(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        } else {
          setDeleting(false);
          setTextIndex((i) => (i + 1) % texts.length);
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts, speed]);

  return (
    <span className="font-mono text-cyan-300">
      {display}
      <span className="animate-pulse text-cyan-400">|</span>
    </span>
  );
}
