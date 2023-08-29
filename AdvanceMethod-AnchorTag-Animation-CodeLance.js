document.getElementById("anchorTagHTML").innerHTML = `
&lt;a href="#" class="hover-underline-animation"&gt;Hover on me to see the effect 🖱&lt;/a&gt;
`;
document.getElementById("anchorTagCSS").innerHTML = `
.hover-underline-animation {
font-family: Arial, Helvetica, sans-serif;
font-size: 20px;
position: relative;
color: black;
text-decoration: none;
}

.hover-underline-animation::after {
content: "";
position: absolute;
width: 100%;
transform: scaleX(0);
height: 5px;
bottom: -5px;
left: 0;
background-color: red;
transform-origin: bottom;
transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover::after {
transform: scaleX(1);
transform-origin: bottom;
}
`;

document.getElementById("anotherAnimationHTML").innerHTML = `
&lt;a href="#" class="hover-underline-another-animation"&gt;Hover on me to see the effect 🖱&lt;/a&gt;
`;

document.getElementById("anotherAnimationCSS").innerHTML = `
.hover-underline-another-animation {
font-family: Arial, Helvetica, sans-serif;
font-size: 20px;
position: relative;
color: black;
text-decoration: none;
}

.hover-underline-another-animation::after {
content: "";
position: absolute;
width: 100%;
transform: scaleX(0);
height: 5px;
bottom: -5px;
left: 0;
background: linear-gradient(90deg, #070000 0%, #4c0001 50%, #070000 100%);
transform-origin: bottom right;
transition: transform 0.25s ease-out;
}

.hover-underline-another-animation:hover::after {
transform: scaleX(1);
transform-origin: bottom left;
}
`;
