document.getElementById("exportComponent").innerHTML = `
    import React from 'react'

    function Header() {
      return (
        &lt;div&gt;
          &lt;h1&gt;This is a heading&lt;/h1&gt;
          &lt;p&gt;This is a paragraph.&lt;/p&gt;
        &lt;/div&gt;
      )
    }

    export default Header
    `;

document.getElementById("importComponent").innerHTML = `
    import Header from './components/js/Header'

    function App() {
      return (
        &lt;&gt;
          &lt;Header /&gt;
        &lt;/&gt;
      );
    }

    export default App;

    `;

document.getElementById("importCSS").innerHTML = `
    import React from 'react'
    import "../css/style.css"

    function Header() {
      return (
        &LT;div&GT;
          &LT;h1&GT;This is a heading&LT;/h1&GT;
          &LT;p&GT;This is a paragraph.&LT;/p&GT;
        &LT;/div&GT;
      )
    }

    export default Header

    `;

document.getElementById("importImg").innerHTML = `
    import React from 'react'
    import VsCodeBg from "../img/VsCodeBg.png"

    function Header() {
      return (
        &lt;div&gt;
          &lt;img src={VsCodeBg} alt='VsCodeBg' style={{ width: '50vw' }} /&gt;
        &lt;/div&gt;
      )
    }

    export default Header
    `;
