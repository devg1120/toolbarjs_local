// https://cdn.jsdelivr.net/npm/droppy-menu@v2.x.x/src/droppy.min.js
import Droppy, { menuGenerator, tabsGenerator, modalGenerator, DroppyContext } from "./droppy.js";

document
    .querySelectorAll('[data-menu]')
    //.forEach((root) => menuGenerator(root, JSON.parse(root.dataset.menu || "{}")));
    .forEach((root) =>  { 
        console.log(root.id, "dataset.menu", root.dataset.menu);
        if (root.id != "menu-1") { 
	   menuGenerator(root, JSON.parse(root.dataset.menu ));
	}
       });


/*
const options = {
    wrapper: 'li',
    trigger: 'a',
    drop: 'ul',
    clickAwayToClose: true,
    ...droppyOptions,
}
*/

function select(event) {
        console.log("select",event.target.href);

}

const options1 = {
  preventDefault:false,
  trigger: 'a'
};
const menu1 = document.querySelector('#menu-1');
const context1 = menuGenerator(menu1, options1,  select);

menu1.addEventListener("toggle", (e) => {
   console.log("toggle", e.target.id);

});

menu1.addEventListener("beforetoggle", (e) => {
   console.log("beforetoggle", e.target.id);

});

document
    .querySelectorAll('[data-tabs]')
   .forEach((root) => tabsGenerator(root, JSON.parse(root.dataset.tabs || "{}")));

document
    .querySelectorAll('[data-modal]')
    .forEach((root) => modalGenerator(root, JSON.parse(root.dataset.modal || "{}")));



