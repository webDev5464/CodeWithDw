document.getElementById("propsMethodHeader").innerHTML = `
        import React from "React"

        const Header = (Header)=> {
          return {
            &lt;&gt;
              &lt;h1&gt;{Header.heading}&lt;/h1&gt;
              &lt;p&gt;{Header.paragraph}&lt;/p&gt;
            &lt;/&gt;
          }
        }

        export default Header
      `;

document.getElementById("propsMethodAppJs").innerHTML = `
        import Header from "./Components/js/Header"

        function App() {
          return (
            &lt;&gt;
              &lt;Header heading="This is a heading" /&gt;
            &lt;/&gt;
          );
        }

        export default App;
      `;
