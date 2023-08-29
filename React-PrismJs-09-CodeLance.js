document.getElementById("codePrism").innerHTML = `
import React, { useEffect } from 'react'
import Prism from "prismjs"
import "./Prism.css"

export default function Code({ code, language }) {
  useEffect(() =&gt; {
    Prism.highlightAll()
  }, [])

  return (
    &lt;div&gt;
      &lt;pre&gt;
        &lt;code className={&prime;language-&dollar;{language}&prime;}&gt;{code}&lt;/code&gt;
      &lt;/pre&gt;
    &lt;/div&gt;
  )
}
`;
document.getElementById("homePrism").innerHTML = `
import React from 'react'
import Code from './Code';

const code = &prime;&lt;h1&gt;This is a Heading&lt;/h1&gt;&prime;;

const jsReact = &prime;
const App = props =&gt; {
  return (
    &lt;div&gt;
      &lt;h1&gt; React App &lt;/h1&gt;
      &lt;div&gt;Awesome code&lt;/div&gt;
    &lt;/div&gt;
  );
};
&prime;;

const css = &prime;h1 {
  background-color: black;
}
&prime;;

const Home = () =&gt; {
  return (
    &lt;div&gt;
      &lt;Code code={code} language="markup" /&gt;
      &lt;Code code={jsReact} language="javascript" /&gt;
      &lt;Code code={css} language="css" /&gt;
    &lt;/div&gt;
  )
}

export default Home
`;