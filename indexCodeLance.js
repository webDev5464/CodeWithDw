document.getElementById("htmlDemo").innerHTML = `
      &lt;!DOCTYPE html&gt;
      &lt;html&gt;

          &lt;head&gt;
              &lt;meta charset="UTF-8"&gt;
              &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
              &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
              &lt;title&gt;document&lt;/title&gt;
          &lt;/head&gt;

          &lt;body&gt;
              &lt;h1&gt;This is a heading&lt;/h1&gt; <br>
              &lt;p&gt;This is a paragraph.&lt;/p&gt; <br>
          &lt;/body&gt;

      &lt;/html&gt;
    `;

document.getElementById("demoCSS").innerHTML = `
      body {
        background-color: green;
      }

      h1 {
        color: red;
        font-family: Arial, Helvetica, sans-serif;
      }

      p {
        font-size: 25px;
        text-shadow: 2px 2px 4px black;
      }
    `;

document.getElementById("demoJavaScript").innerHTML = `
      let fruits = ["Apple","Banana","kiwi","orange"];

      text = "";
      for (i = 0; i &lt; fruits.length; i++) {
        text += fruits[i] + "&lt;br&gt;";
      }
                            
      document.getElementById("demo").innerHTML = fruits;
    `;

document.getElementById("demoReact").innerHTML = `
      import './App.css';
      import Header from './Components/Js/Header';
      import Home from './Components/Js/Home'
      import About from './Components/Js/About'
      import Service from './Components/Js/Service'
      import Project from './Components/Js/Project'
      import Blog from './Components/Js/Blog'
      import Contact from './Components/Js/Contact'
      import { BrowserRouter, Routes, Route } from 'react-router-dom'

      function App() {
        return (
          &lt;&gt;
            &lt;BrowserRouter&gt;
              &lt;Header /&gt;

              &lt;Routes&gt;
                &lt;Route path='/' element={&lt;Home /&gt;} /&gt;
                &lt;Route path='About' element={&lt;About /&gt;} /&gt;
                &lt;Route path='Service' element={&lt;Service /&gt;} /&gt;
                &lt;Route path='Project' element={&lt;Project /&gt;} /&gt;
                &lt;Route path='Blog' element={&lt;Blog /&gt;} /&gt;
                &lt;Route path='Contact' element={&lt;Contact /&gt;} /&gt;
              &lt;/Routes&gt;
            &lt;/BrowserRouter&gt;
          &lt;/&gt;
        );
      }

      export default App;
    `;
