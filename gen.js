//! header response navBar
let navigationIcon = document.getElementById("navigationIcon"),
  navigationDetail = document.getElementById("navigationDetail");
//! Navigation Button change toggle 
function change(t) {
  t.classList.toggle("change-linkPage")
}
//! Language Page's Section
function openNav() {
  document.getElementById("myNav").style.width = "100%"
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%"
}
navigationIcon.addEventListener("click", (function () {
  "navigation-detail" === navigationDetail.className ? navigationDetail.className += " navigation-response" : navigationDetail.className = "navigation-detail"
}));
let i, acc = document.getElementsByClassName("accordion");
for (i = 0; i < acc.length; i++) acc[i].addEventListener("click", (function () {
  this.classList.toggle("activeMenu");
  let t = this.nextElementSibling;
  t.style.maxHeight ? t.style.maxHeight = null : t.style.maxHeight = t.scrollHeight + "px"
}));