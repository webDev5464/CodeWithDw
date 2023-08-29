document.getElementById("browserRouterAppJs").innerHTML = `
import Navigation from "./components/js/Navigation" 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/js/Home'
import NextPage from './components/js/NextPage';
import About from './components/js/About';

function App() {
  return (
    &LT;BrowserRouter&GT;
      &LT;Navigation /&GT;
      &LT;Routes&GT;
        &LT;Route path='/' element={&LT;Home /&GT;} /&GT;
        &LT;Route path='Info' element={&LT;Info /&GT;}&GT;&LT;/Route&GT;
        &LT;Route path='Service' element={&LT;Service /&GT;}&GT;&LT;/Route&GT;
        &LT;Route path='MoreDetail' element={&LT;More Detail /&GT;}&GT;&LT;/Route&GT;
      &LT;/Routes&GT;
    &LT;/BrowserRouter&GT;
  );
}

export default App;
      `;

document.getElementById("browserRouterHeaderJs").innerHTML = `
import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "./web_logo.png"

function Navigation() {
  return (
    &LT;div&GT;
     &lt;div class="Logo"&gt;
          &lt;img src={Logo} alt="Main-Logo" /&gt;
     &lt;/div&gt;
      &LT;NavLink to='/'&GT;Home&LT;/NavLink&GT;
      &LT;NavLink to='Info'&GT;Info&LT;/NavLink&GT;
      &LT;NavLink to='Service'&GT;Service&LT;/NavLink&GT;
      &LT;NavLink to='MoreDetail'&GT;More Detail&LT;/NavLink&GT;
    &LT;/div&GT;
  )
}

export default Navigation
      `;
document.getElementById("LinkAppJs").innerHTML = `
import "./App.css";
import "./Components/CSS/Component.css";
import "./Components/CSS/Responsive.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Js/Header";
import Home from "./Components/Js/Home";
import Info from "./Components/Js/Info";
import Service from "./Components/Js/Service";
import LinkedPage from "./Components/Js/LinkedPage";
import Link from "./Components/Js/Link";
import Footer from "./Components/Js/Footer";

function App() {
  return (
    &lt;&gt;
      &lt;BrowserRouter&gt;
        &lt;Header /&gt;
        &lt;Routes&gt;
          &lt;Route path="/" element={&lt;Home /&gt;} /&gt;
          &lt;Route path="Info" element={&lt;Info /&gt;} /&gt;
          &lt;Route path="Service" element={&lt;Service /&gt;} /&gt;
          &lt;Route path="LinkedPage" element={&lt;LinkedPage /&gt;} /&gt;
          {/* import path like this. */}
          &lt;Route path="LinkedPage/Link" element={&lt;Link /&gt;} /&gt;
        &lt;/Routes&gt;
        &lt;Footer /&gt;
      &lt;/BrowserRouter&gt;
    &lt;/&gt;
  );
}

export default App;

`;
document.getElementById("LinkedPageJs").innerHTML = `
import React from "react";
import { Link } from "react-router-dom";

const LinkedPage = () =&gt; {
  return (
    &lt;div className="LinkedPage"&gt;
      &lt;h1&gt;LinkedPage.js&lt;/h1&gt;
      &lt;br /&gt;
      {/* Use like this. */}
      &lt;p&gt;Click Here!: &lt;Link to="Link"&gt;Link Component&lt;/Link&gt;&lt;/p&gt;
    &lt;/div&gt;
  );
};

export default LinkedPage;

`;
