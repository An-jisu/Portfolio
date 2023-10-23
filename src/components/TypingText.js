import React, { useState, useEffect } from "react";

const TypingText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const typingInterval = 90; // 글자마다 나타나는 시간 (밀리초)
    let currentCharIndex = 0;
    let typingTimer;

    const startTyping = () => {
      typingTimer = setInterval(() => {
        if (currentCharIndex < text.length) {
          const currentText = text
            .slice(0, currentCharIndex + 1)
            .replace(/\\n/g, "<br>");
          setDisplayText(currentText);
          currentCharIndex++;
        } else {
          clearInterval(typingTimer);
        }
      }, typingInterval);
    };

    startTyping();

    return () => {
      clearInterval(typingTimer);
    };
  }, [text]);

  return <div dangerouslySetInnerHTML={{ __html: displayText }} />;
};

export default TypingText;
