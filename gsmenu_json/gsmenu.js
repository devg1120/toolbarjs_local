/*
 * JavaScript - CSS Responsive Dropdown Menu
 * Author : Oğuzhan Avcı
 * https://github.com/oziavci
*/


const menu_json = `
[
   {
   "name":"test a",
   "id": "01"
   },
   {
   "name":"test b",
   "id": "02"
   },
   {
   "name":"test c",
   "id": "03",
   "submenu": [
               {
               "name":"test c1",
               "id": "0301"
               },
               {
               "name":"test c2",
               "id": "0302",
               "submenu": [
                            {
                            "name":"test c21",
                            "id": "030201"
                            },
                            {
                            "name":"test c22",
                            "id": "030202",
                            "submenu": [
                                         {
                                         "name":"test c221",
                                         "id": "03020201"
                                         },
                                         {
                                         "name":"test c222",
                                         "id": "03020201"
                                         },
                                         {
                                         "name":"test c223",
                                         "id": "03020201"
                                         }
	                               ]
                            },
                            {
                            "name":"test c23",
                            "id": "030203"
                            }
	                  ]
               },
               {
               "name":"test c3",
               "id": "0303"
               }
             ]
   },
   {
   "name":"test d",
   "id": "04"
   }
]
`;

/*
const data = JSON.parse(menu_json); 

function menu_tree(menu_data, level=0) {
  level += 1
  for ( let i = 0; i < menu_data.length; i++) {
    console.log("[" + level + "]", menu_data[i]["name"], ":", menu_data[i]["id"])
    if (menu_data[i]["submenu"]) {
	  //console.log("submenu exist");
          menu_tree(menu_data[i]["submenu"], level= level ) 
    }
  }
}

menu_tree(data);

let new_json = JSON.stringify(data, null, 3)

console.log(new_json)
*/

function make_element( tag_name, option) {
  const element = document.createElement(tag_name)
  // console.log("cleate element")
  if (option.id ) {
      element.id = potion.id;
  }
  if (option.text ) {
      element.text = option.text;
  }
  if (option.value ) {
      element.value = option.value;
  }
  if (option.class_list ) {
    for ( let i = 0; i < option.class_list.length; i++) {
      element.classList.add(option.class_list[i])
    }
  }
  if (option.attr_dict ) {
    for ( let i = 0; i < option.attr_dict.length; i++) {
      element.setAttribute(option.attr_list[i].name, option.attr_list[i].value)
    }
    for (let key in option.attr_dict) {
      element.setAttribute(key, option.attr_dict[key])
    }
  }
  if (option.parent) {
     option.parent.appendChild(element);
  }
  if (option.child_list ) {
    for ( let i = 0; i < option.child_list.length; i++) {
      element.appendChild(option.child_list[i])
    }
  }
  return element
}

//const divMenu = document.querySelector("#gsmenu");
//console.log(divMenu)

let container = make_element("div", { class_list : ["container"]})
let menu_open = make_element("div", { class_list : ["menu-open"]})
let menu_close = make_element("div", { class_list : ["menu-close"]})
make_element("span", { class_list : ["open"], parent: menu_open})
make_element("span", { class_list : ["close"], parent: menu_close})

let gsmenu = make_element("div", { class_list : ["gsmenu"]})
container.appendChild(menu_open)
container.appendChild(gsmenu)
gsmenu.appendChild(menu_close)
let gsmenu_nav = make_element("ul", { class_list : ["gsmenu-nav"]})
gsmenu.appendChild(gsmenu_nav)

function menu_build(parent, menu_data, level=0) {
  level += 1
  for ( let i = 0; i < menu_data.length; i++) {
    // console.log("[" + level + "]", menu_data[i]["name"], ":", menu_data[i]["id"])
    if (!menu_data[i]["submenu"]) {
    let li = make_element("li",{
	                        parent: parent, 
	                        class_list : ["item"]
                               }
                         )
    make_element("a",{
	              parent: li, 
	              text:    menu_data[i]["name"],
	              attr_dict : {
			           href: '#',
			           menu_id: menu_data[i]["id"] 
                                  }
	           }
	       )
    }  else {
          if ( level > 2 ) {
            console.log(" level over skip submenu [" + level + "]", menu_data[i]["name"], ":", menu_data[i]["id"])
            continue
	  }
	  //console.log("submenu exist");
            let li = make_element("li",{
	                        parent: parent, 
	                        class_list : ["item", "dropdownitem"]
                               }
                         )
             make_element("a",{
	              parent: li, 
	              text:    menu_data[i]["name"],
	              class_list : ["nav-dropdown"],
	              attr_dict : {
			           href: '#',
			           menu_id: menu_data[i]["id"] 
                                  }
	           }
	       )
             let div = make_element("div",{
	              parent: li, 
	              class_list : ["dropdown"]
	           }
	       )
             let ul = make_element("ul",{
	              parent: div 
	           }
	       )
            menu_build(ul, menu_data[i]["submenu"], level= level ) 
    }
  }
}

const data = JSON.parse(menu_json); 
menu_build(gsmenu_nav, data);

const divMenu = document.querySelector("#gsmenu");
divMenu.appendChild(container)

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
