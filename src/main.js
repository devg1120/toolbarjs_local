import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import toolbarjs from './toolbarjs'
import  "./fontawesome-free-6.7.2-web/css/all.min.css"

import image_svg from './svg/image.svg';


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))


// https://fontawesome.com/search?p=3&o=r&ic=free&s=solid&ip=classic
//
let buttons = [
  {
    label: '<i class="fa fa-plus fa-xs"></i>',
    type: "click",
    marginLeft: "2px",
    click: event => {
      console.log('plus was clicked.')
    }
  },
  {
    label: '<i class="fa-solid fa-up-down-left-right fa-xs"</i>',
    type: "click",
    marginLeft: "2px",
    click: event => {
      console.log('plus was clicked.')
    }
  },
  {
    label: image_svg,
    type: "click",
    marginLeft: "2px",
    click: event => {
      console.log('plus was clicked.')
    }
  },
  {
    label: 'Foo',
    type: "click",
    marginLeft: "8px",
    click: event => {
      console.log('Foo was clicked.')
    }
  },
  { type: "split" },
  {
    label: 'Bar',
    type: "toggle",
    marginLeft: "0px",
    onclick: event => {
      console.log('Bar was toggle clicked. on ')
    },
    offclick: event => {
      console.log('Bar was toggle clicked. off ')
    }
  },
  {
    label: 'MENU',
    type: "menu",
    marginLeft: "15px",
    change: event => {
      console.log('Menu change.', event.target.value)
    },
    menu: [
        {
         label: 'sub1',
         type: "item",
         value: 'sub1'
        },
        {
         label: '<i class="fa fa-plus fa-xs">subx</i>',
         type: "item",
         value: 'sub2'
        },
        {
         label: 'sub3',
         type: "item",
         value: 'sub3'
        }
    ]
  },

  {
    label: 'TREE',
    type: "menu",
    marginLeft: "15px",
    change: event => {
      console.log('Menu change.', event.target.value)
    },
    menu: [
        {
         label: 'sub1',
         type: "item",
         value: 'sub1'
        },
        {
         label: 'sub2',
         type: "submenu",
         menu: [
                  {
                    label: 'child1',
                    type: "item",
                    value: 'child1'
             	 },
                  {
                    label: 'child2',
                    type: "item",
                    value: 'child2'
             	 }
             ]
        },
        {
         label: 'sub3',
         type: "item",
         value: 'sub3'
        }
    ]
  },
  
  {
    label: 'HSS',
    type: "color",
    marginLeft: "15px",
    select: event => {
      const color = document.getElementById('color').value;
      console.log('HSS was select.', color)
    }
  }
]
var location =   {direction: "top"};
var style =   {
	  base_color:"#c0c0c0",
	  //button_color:"#e0e0e0",
	  button_color:"#e1e0e0",
         };

let toolbar = toolbarjs(
   "app",
   location, // location: top, bottom, left, or right
   style,
   buttons // Array of button objects
)

console.log(toolbar)


