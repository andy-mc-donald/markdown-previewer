import React, { useState } from "react";
import marked from "marked";
import { starterText } from "./starterText";
import "./App.css";

const App = () => {
  const [text, setText] = useState(starterText);

  marked.setOptions({
    breaks: true,
  });

  const renderMarkdown = () => {
    return { __html: marked(text) };
  };

  return (
    <div id="container">
      <h1 id="title">Markdown Previewer</h1>
      <div id="inner-container">
        <textarea
          id="editor"
          rows="60"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
        <div id="preview" dangerouslySetInnerHTML={renderMarkdown()}></div>
      </div>
    </div>
  );
};

export default App;
