import React from "react";
import Highlight from "react-highlight";

export default function Code() {
  return (
    <div>
      <Highlight className="language-name-of-snippet">
        {"code snippet to be highlighted"}
      </Highlight>
    </div>
  );
}
