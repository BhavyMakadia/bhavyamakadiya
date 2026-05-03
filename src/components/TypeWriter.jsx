import { useState, useEffect } from "react";

export default function TypeWriter({ words, speed = 100, pause = 2000 }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setDeleting(false);
            setIndex((i) => (i + 1) % words.length);
          }
        }
      },
      deleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return (
    <span className="gradient-text">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}
