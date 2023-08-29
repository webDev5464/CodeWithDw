const menuHtml = [
     {
          link: "./HTML-Home-01.html",
          pageName: "Basic HTML",
     },
     {
          link: "./html-introduction-02.html",
          pageName: "HTML introduction",
     },
     {
          link: "./html-Editor-03.html",
          pageName: "HTML Editor",
     },
];

const menuCSS = [
     {
          link: "./CSS-Basic-01.html",
          pageName: "CSS Tutorial",
     },
];

const menuJavaScript = [
     {
          link: "./JavaScript-Basic-01.html",
          pageName: "Basic of JavaScript",
     },
];

const menuReact = [
     {
          link: "./React-App-Install-01.html",
          pageName: "React App Install Method",
     },
     {
          link: "./react-app-structure-02.html",
          pageName: "React App Structure",
     },
     {
          link: "./react-app-about-AppJs-03.html",
          pageName: "About App.js & app start command.",
     },
     {
          link: "./react-component-04.html",
          pageName: "Component's & Import Export Method",
     },
     {
          link: "./react-BrowserRouter-05.html",
          pageName: "BrowserRouter Method",
     },
     {
          link: "./react-propsMethod-06.html",
          pageName: "Props Method",
     },
     {
          link: "./React-useRef-Method-07.html",
          pageName: "useRef Method",
     },
     {
          link: "./React-useState-Method-08.html",
          pageName: "useState() Method",
     },
     {
          link: "./React-UseContext-method-10.html",
          pageName: "useContext() Method"
     },
     {
          link: "./React-Prismjs-09.html",
          pageName: "Prism in ReactJs",
     },
];

const menuAdvanceMethod = [
     {
          link: "AdvanceMethod-01.html",
          pageName: "Advance Method Home",
     },
     {
          link: "./AdvanceMethod-scroll-navigation-animation-02.html",
          pageName: "Navigation Scroll Animation",
     },
     {
          link: "./AdvanceMethod-AnchorTag-Animation-03.html",
          pageName: 'Anchor Tag Animation <br> ( &lt;a href=""&gt;&lt;/a&gt; )',
     },
     {
          link: "./AdvanceMethod-DropDown-04.html",
          pageName: "DropDown With Js",
     },
];

let Menu_itemHtml = document.getElementById("lengCodeDetailHTML"),
     Menu_itemCSS = document.getElementById("lengCodeDetailCSS"),
     Menu_itemJavaScript = document.getElementById("lengCodeDetailJavaScript"),
     Menu_itemReact = document.getElementById("lengCodeDetailReact"),
     Menu_itemAdvanceMethod = document.getElementById(
          "lengCodeDetailAdvanceMethod"
     );

menuHtml.map(function (e) {
     Menu_itemHtml.innerHTML += `<li><a href="${e.link}">${e.pageName}</a></li>`;
}),
     menuCSS.map(function (e) {
          Menu_itemCSS.innerHTML += `<li><a href="${e.link}">${e.pageName}</a></li>`;
     }),
     menuJavaScript.map(function (e) {
          Menu_itemJavaScript.innerHTML += `<li><a href="${e.link}">${e.pageName}</a></li>`;
     }),
     menuReact.map(function (e) {
          Menu_itemReact.innerHTML += `<li><a href="${e.link}">${e.pageName}</a></li>`;
     }),
     menuAdvanceMethod.map(function (e) {
          Menu_itemAdvanceMethod.innerHTML += `<li><a href="${e.link}">${e.pageName}</a></li>`;
     });
