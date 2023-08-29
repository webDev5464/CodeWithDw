//! Footer General for copy regarding
const footer = document.getElementById("footer");

const footerCode = `
<div class="footer-top">
<section class="footer-detail">
     <h3>How to create website ?</h3>
     <article>
          <p>Want to learn language's HTML , CSS , JavaScript Front-end developer and Django & NodeJs
               Back-end Developer. Also Learn ReactJs frame work (Front-end). Now Compleat you
               journey with Fullstack WebDeveloping.</p>
     </article>
     <div class="footer-language-link">
          <h3>Language's</h3>
          <ul>
               <li><a href="./CSS-Basic-01.html" class="hover-underline-animation">HTML</a></li>
               <li><a href="./CSS-Basic-01.html" class="hover-underline-animation">CSS</a></li>
               <li><a href="./JavaScript-Basic-01.html" class="hover-underline-animation">JavaScript</a>
               </li>
               <li><a href="./React-App-Install-01.html" class="hover-underline-animation">React</a></li>
               <li><a href="./NodeJs-not.html" class="hover-underline-animation"
                         target="_blank">NodeJs</a></li>
               <li><a href="./Django-not.html" class="hover-underline-animation"
                         target="_blank">MongoDb</a></li>
          </ul>
     </div>
</section>
<section class="response-footer-top">
     <section class="contact-info">
          <h3>Contact Here!</h3>
          <div>
               <div>
                    <a href="https://www.instagram.com/mr.dev_dave/" target="_blank"><img
                              src="./footer-insta.png" alt="Contact-Instagram"></a>
               </div>
               <div>
                    <a href="mailto:devendhagat0@gmail.com" target="_blank"><img src="./footer-email.png"
                              alt="Contact-Email"></a>
               </div>
          </div>
     </section>
     <section class="project-example">
          <h3>Example Project's</h3>
          <div>
               <div><a href="https://badshah5464.github.io/GymProjectBadshah/" class="a-btn"
                         target="_blank">Badshah's Fitness</a></div>
               <div><a href="https://badshah5464.github.io/DW-OnlineShop/" class="a-btn"
                         target="_blank">DW-OnlineShop</a></div>
          </div>
     </section>
</section>
</div>
<hr class="hr-simple">
<div class="footer-article">
<h3>About This Website</h3>
<p>This website is learning purpose for Fullstack WebDeveloping. Basic to advance tip's and method's step
     by step code with detail. developer is dally working end update this website. FeedBack end
     suggestion about this website to contact developer with email end instagram profile.</p>
</div>
`;

footer.innerHTML += footerCode;
