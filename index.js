//! Navigation Bar Icon
function change(e) {
     e.classList.toggle("change");
}
//! img-change
let slideIndex = 0;
function showSlides() {
     let e,
          n = document.getElementsByClassName("mySlides");
     for (e = 0; e < n.length; e++) n[e].style.display = "none";
     slideIndex++,
          slideIndex > n.length && (slideIndex = 1),
          (n[slideIndex - 1].style.display = "block"),
          setTimeout(showSlides, 4e3);
}
//! Change Theme
showSlides();
let changeThemeIndex = document.getElementById("changeThemeIndex"),
     changeModeIconIndex = document.getElementById("changeModeIconIndex"),
     modeTitleIndex = document.getElementById("modeTitleIndex");
changeThemeIndex.onclick = function () {
     document.body.classList.toggle("darkMode"),
          document.body.classList.toggle("themeIconChange"),
          document.body.classList.contains("darkMode")
               ? ((changeModeIconIndex.src = "./SunColor.png"),
                    (modeTitleIndex.innerHTML = "Light Mode"))
               : ((changeModeIconIndex.src = "./MoonColor.png"),
                    (modeTitleIndex.innerHTML = "Dark Mode"));
};
