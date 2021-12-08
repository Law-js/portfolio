import React from "react";
import ReactTypingEffect from "react-typing-effect";

const TextAnim = () => {
  return (
    <>
      <ReactTypingEffect
        speed="100"
        eraseSpeed="100"
        eraseDelay="1000"
        typingDelay="500"
        text={["Pascal Hector", "Développeur Web", "Front-end", "Back-end"]}
        cursorRenderer={(cursor) => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split("").map((char, i) => {
                const key = `${i}`;
                return <span key={key}>{char}</span>;
              })}
            </h1>
          );
        }}
      />
    </>
  );
};

export default TextAnim;
