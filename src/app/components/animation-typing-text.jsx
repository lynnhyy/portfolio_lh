"use client";
import { useEffect, useState } from "react";

export default function TypingText({ 
  text, 
  speed = 50,
  delay = 0 // temps avant début (ms)
}) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    let interval;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;

        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, delay]);

return (
  <span className="font-mono whitespace-pre-line hidden sm:inline-block max-w-3xl">
    {displayed}
    <span className="animate-pulse">|</span>
  </span>
);
}
