document.getElementById("navigationAnimationHTML").innerHTML = `
  &LT;header class="header-top" id="headerScroll"&GT;
    &LT;section class="header-container"&GT;
      &LT;div&GT;
        &LT;div class="logo"&GT;Company Name&LT;/div&GT;
      &LT;/div&GT;
      &LT;nav&GT;
        &LT;ul&GT;
          &LT;li&GT;Home&LT;/li&GT;
          &LT;li&GT;About&LT;/li&GT;
          &LT;li&GT;Contact&LT;/li&GT;
          &LT;li&GT;Info&LT;/li&GT;
          &LT;li&GT;About&LT;/li&GT;
        &LT;/ul&GT;
      &LT;/nav&GT;
    &LT;/section&GT;
  &LT;/header&GT;
    `;

document.getElementById("navigationAnimationCSS").innerHTML = `
    .header-top {
      position: sticky;
      top: 30px;
      margin: 0 7em;
      transition: .5s ease-in-out;
      -webkit-transition: .5s ease-in-out;
      -moz-transition: .5s ease-in-out;
      -ms-transition: .5s ease-in-out;
      -o-transition: .5s ease-in-out;
    }

    .header-scroll {
      position: sticky;
      margin: 0;
      top: 0;
      transition: .5s ease-in-out;
      -webkit-transition: .5s ease-in-out;
      -moz-transition: .5s ease-in-out;
      -ms-transition: .5s ease-in-out;
      -o-transition: .5s ease-in-out;
    }

    .header-container {
      background-color: aquamarine;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 5px 8px rgba(150, 150, 150, 0.462);
      padding: 1.5em;
      width: 100%;
      position: absolute;
      justify-content: space-between;
    }
    `;

document.getElementById("navigationAnimationJs").innerHTML = `
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop < 50) {
        document.getElementById("headerScroll").className = "header-top";
      } else {
        document.getElementById("headerScroll").className = "header-scroll";
      }
    };
    `;

document.getElementById("reactNavigationMethod").innerHTML = `
import "../CSS/HeaderBanner.css";
import { useState } from "react";

function Header() {
  const [colorChange, setColorChange] = useState(false);
  const changeNavbarColor = () =&gt; {
    if (window.scrollY &gt;= 100) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    &lt;&gt;
      &lt;header className={colorChange ? "header-scroll" : "header-top"}&gt;
        &lt;section class="header-container"&gt;
          &lt;div&gt;
            &lt;p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontFamily: "arial",
              }}
            &gt;
              Compony &lt;br /&gt; Name
            &lt;/p&gt;
          &lt;/div&gt;
          &lt;nav&gt;
            &lt;ul&gt;
              &lt;li&gt;Home&lt;/li&gt;
              &lt;li&gt;About&lt;/li&gt;

              &lt;li&gt;Contact&lt;/li&gt;
              &lt;li&gt;Info&lt;/li&gt;
              &lt;li&gt;About&lt;/li&gt;
            &lt;/ul&gt;
          &lt;/nav&gt;
        &lt;/section&gt;
      &lt;/header&gt;
    &lt;/&gt;
  );
}
export default Header;
    `;
