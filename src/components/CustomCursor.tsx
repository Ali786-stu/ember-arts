import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState("");

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (!target) return;

      // Using .closest() ensures the cursor state works even if hovering over child elements
      if (target.closest("[data-cursorpointer]")) {
        setCursorType("cursorHover");
      } else if (target.closest("[data-cursorpointermini]")) {
        setCursorType("cursorHoverMini");
      } else if (target.closest("h1, h2, h3, h4, [data-cursorpointertext]")) {
        setCursorType("cursorHoverText");
      } else if (target.closest("[data-cursorpointersm]")) {
        setCursorType("cursorHoverSm");
      } else {
        setCursorType("");
      }
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      className={`cursor hidden md:block ${cursorType}`}
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        // Centering is handled by translate(-50%, -50%) in CSS classes
      }}
    />
  );
}
