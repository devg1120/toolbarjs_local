/*
 * JavaScript - CSS Responsive Dropdown Menu
 * Author : Oğuzhan Avcı
 * https://github.com/oziavci
*/

const openMenu = document.querySelector(".menu-open");
const closeMenu = document.querySelector(".menu-close");
const menuDiv = document.querySelector(".gsmenu");
const menu = document.querySelector(".gsmenu-nav");
const dropDowns = menu.getElementsByClassName("nav-dropdown");
const dropDownsChild = menu.querySelectorAll('.dropdown .nav-dropdown');

openMenu.addEventListener("click", menuToggle);
closeMenu.addEventListener("click", menuToggle);

document.body.insertAdjacentHTML("beforeend", "<div id='menu-overlay'></div>");
document.querySelector("#menu-overlay").addEventListener("click", menuToggle);

function menuToggle() {
    menuDiv.classList.toggle("active");
    document.body.classList.toggle("hide-scrolling");
    document.body.classList.toggle("mobile-menu-active");
    document.getElementById("menu-overlay").classList.toggle("show");
}

for (var i = 0; i < dropDownsChild.length; i++) {
    dropDownsChild[i].classList.add('child');
    dropDownsChild[i].addEventListener("click", function() {
        this.classList.toggle('opened');
    });
}
for (var i = 0; i < dropDowns.length; i++) {
    if(!dropDowns[i].classList.contains("child")){
        dropDowns[i].classList.add('parent');
        dropDowns[i].addEventListener("click", function() {
            this.classList.toggle('opened');
        });
    }
}

function menu_select(e) {
    console.log("select:" + e.target.text, e.target.getAttribute("menu_id"));
}
elements_a = menu.querySelectorAll("a")

for (let i = 0; i < elements_a.length; i++) {
  console.log(elements_a[i].text);
  //elements_a[i].setAttribute("menu_id" , String(i + 1).padStart(6, '0'));
  elements_a[i].addEventListener("click", menu_select);

}
