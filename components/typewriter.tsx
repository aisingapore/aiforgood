"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  /** Pause before typing starts, in ms. */
  delay?: number;
  /** Per-character interval, in ms. */
  speed?: number;
  className?: string;
  /** Show the blinking caret while typing. */
  cursor?: boolean;
};

/**
 * Types `text` out one character at a time. Renders empty on the server, so
 * anything important here should also exist in metadata or nearby copy.
 */
export function Typewriter({
  text,
  delay = 600,
  speed = 28,
  className = "",
  cursor = true,
}: TypewriterProps) {
  const [shown, setShown] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (shown.length >= text.length) {
      setDone(true);
      return;
    }
    const timer = setTimeout(() => {
      setShown(text.slice(0, shown.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [started, shown, text, speed]);

  return (
    <span className={className}>
      {shown}
      {cursor && !done && (
        <span
          className="inline-block w-[2px] h-[1em] bg-current align-middle ml-0.5 animate-pulse"
          aria-hidden="true"
        />
      )}
    </span>
  );
}
