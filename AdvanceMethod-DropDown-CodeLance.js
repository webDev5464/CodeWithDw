document.getElementById("dropDownCSS").innerHTML = `
.drop {
     color: blue;
     text-decoration: underline;
     cursor: pointer;
     font-size: 20px;
     font-weight: 600;
   }

   .down {
     position: absolute;
     display: none;
     background-color: white;
     box-shadow: 2px 2px 4px gray;
     width: 200px;
     margin: 0.2em 0;
   }

   .down > a {
     display: block;
     margin: 0.3em 0.5em;
     font-family: Arial, Helvetica, sans-serif;
   }

   .active {
     display: block;
   }
`;
document.getElementById("dropDownHTML").innerHTML = `
&lt;div class="dropdown"&gt;
     &lt;div class="drop" onclick="action()"&gt;Click Here!&lt;/div&gt;
          &lt;div class="down" id="show"&gt;
          &lt;a href="#"&gt;Customer Service&lt;/a&gt;
          &lt;a href="#"&gt;FeedBack&lt;/a&gt;
          &lt;a href="#"&gt;Link&lt;/a&gt;
          &lt;a href="#"&gt;Link 1&lt;/a&gt;
          &lt;a href="#"&gt;Link 2&lt;/a&gt;
     &lt;/div&gt;
&lt;/div&gt;
`;
document.getElementById("dropDownJs").innerHTML = `
function action() {
     document.getElementById("show").classList.toggle("active");
   }

   window.onclick = (event) =&gt; {
     if (!event.target.matches(".drop")) {
       let down = document.getElementsByClassName("down");
       let i;
       for (i = 0; i &lt; down.length; i++) {
         let dropdown = down[i];
         if (dropdown.classList.contains("active")) {
           dropdown.classList.remove("active");
         }
       }
     }
   };
`;
