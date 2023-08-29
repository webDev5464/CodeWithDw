const reactPageLink = [
     {
          link: "./React-App-Install-01.html",
          pageName: "React App Install",
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
          pageName: "useRef() Method",
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
          link: "./React-PrismJs-09.html",
          pageName: "Prism in ReactJs",
     },
];

let reactLink = document.getElementById("reactLink");
reactPageLink.map(function (x) {
     reactLink.innerHTML += `<li><a href="${x.link}">${x.pageName}</a></li>`;
});
