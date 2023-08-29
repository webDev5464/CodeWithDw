let pageLinkAdvanceMethod = document.getElementById("advanceMethodLink");

const pageLink = [
  {
    link: "./AdvanceMethod-01.html",
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

pageLink.map(function (x) {
  pageLinkAdvanceMethod.innerHTML += `
    <li><a href="${x.link}">${x.pageName}</a></li>
    `;
});
