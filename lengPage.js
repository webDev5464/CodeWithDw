//! linkPage header lengTopicNavBtn
let lengTopicNavBtn = document.getElementById("lengTopicNavBtn"),
  linkPageAside = document.getElementById("linkPageAside");
//! Output Btn
function showOutput(e, n) {
  let t, c;
  for (
    c = document.getElementsByClassName("outputBtn"), t = 0;
    t < c.length;
    t++
  )
    c[t].className = c[t].className.replace(" active", "");
  (document.getElementById(n).style.display = "block"),
    (e.currentTarget.className += " active");
}
//! Change Theme
lengTopicNavBtn.addEventListener("click", function () {
  "linkPageAside" === linkPageAside.className
    ? (linkPageAside.className += " linkPageAside-response")
    : (linkPageAside.className = "linkPageAside");
});
let changeTheme = document.getElementById("changeTheme"),
  changeIcon = document.getElementById("changeIcon"),
  modeTitle = document.getElementById("modeTitle");
changeTheme.onclick = function () {
  document.body.classList.toggle("darkMode"),
    document.body.classList.contains("darkMode")
      ? ((changeIcon.src = "./SunColor.png"),
        (modeTitle.innerHTML = "Light Mode"))
      : ((changeIcon.src = "./MoonColor.png"),
        (modeTitle.innerHTML = "Dark Mode"));
};
