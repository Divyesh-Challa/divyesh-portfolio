import React, { useEffect, useState, useRef } from "react";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  characters?: string;
  className?: string;
  animateOnHover?: boolean;
}

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 35,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*",
  className = "",
  animateOnHover = true,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const isAnimatingRef = useRef(false);

  const runAnimation = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) return text[index];
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
        isAnimatingRef.current = false;
      }
      iteration += 1 / 2;
    }, speed);
  };

  useEffect(() => {
    runAnimation();
  }, [text]);

  const handleMouseEnter = () => {
    if (animateOnHover && !isAnimatingRef.current) {
      runAnimation();
    }
  };

  return (
    <span onMouseEnter={handleMouseEnter} className={`cursor-default ${className}`}>
      {displayText}
    </span>
  );
};
