import * as React from "react";
import { render } from "react-dom";
import axios from "axios";
import "./index.css";
import Markdown from "markdown-to-jsx";

const App = () => {
  const [markdown, setMarkdown] = React.useState("");
  React.useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/emilylanereactive/emilylanereactive.github.io/master/readme.md"
      )
      .then((d) => {
        setMarkdown(d.data);
      });
  }, []);
  return <Markdown>{markdown}</Markdown>;
};

render(<App />, document.getElementById("markdown"));
