import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import toolbarjs from './toolbarjs'
import  "./fontawesome-free-6.7.2-web/css/all.min.css"


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


let buttons = [
 {
    label: '<i class="fa fa-plus"></i>',
    type: "click",
    click: event => {
      console.log('plus was clicked.')
    }


  },
  {
    label: 'Foo',
    type: "click",
    click: event => {
      console.log('Foo was clicked.')
    }
  },
  {
    label: 'Bar',
    type: "toggle",
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
    change: event => {
      console.log('Menu change.', event.target.value)
    },
    menu: [
        {
         label: 'sub1',
         value: 'sub1'
        },
        {
         label: 'sub2',
         value: 'sub2'
        },
        {
         label: 'sub3',
         value: 'sub3'
        }
    ]
  },
  {
    label: 'HSS',
    type: "color",
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


