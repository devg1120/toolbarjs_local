import "./style.css";
export default function toolbar(...options) {

  let [ parentid, location, style, buttons ] = options

  const toolbar = document.createElement('toolbar')
  toolbar.classList.add("gstoolbar")
  const toolbarContainer = document.createElement('toolbar-container')

  styleToolbar(toolbar, style)

  //setLocation(toolbar, location)

  createButtons(toolbar, style, buttons)

  toolbarContainer.appendChild(toolbar)


  //document.body.insertBefore(toolbarContainer, document.body.firstChild);
	

  var parent = document.getElementById(parentid);
  parent.appendChild(toolbarContainer);

  parent.style.position = 'relative'
  toolbarContainer.style.position = 'absolute'
  toolbarContainer.style.zIndex = '999999'
  //toolbarContainer.style.top =  0;
  //toolbarContainer.style.left = 0;

  setLocation(toolbarContainer, location)

  return toolbar
}

function styleToolbar(toolbar, style) {

  //toolbar.style.position = 'fixed'
  toolbar.style.position = 'relative'
  //toolbar.style.position = 'abusolute'
  toolbar.style.zIndex = '999999'
  toolbar.style.margin = '0'
  toolbar.style.padding = '5px'
  //toolbar.style.boxShadow = '0 2px 1px rgba(0, 0, 0, 0.125)'
  toolbar.style.boxShadow = '2px 2px 1px 1px rgba(0, 0, 0, 0.525)'
  toolbar.style.backgroundColor = style.base_color
}

function setLocation(toolbar, location ) {

  const width = '15%'

  switch (location.direction) {
    case 'top':
      toolbar.style.top = '0'
      toolbar.style.left = '0'
      toolbar.style.width = '100%'
      break
    case 'bottom':
      toolbar.style.bottom = '0'
      toolbar.style.left = '0'
      toolbar.style.width = '100%'
      break
    case 'left':
      toolbar.style.left = '0'
      toolbar.style.top = '0'
      toolbar.style.width = width
      toolbar.style.height = '100%'
      break
    case 'right':
      toolbar.style.right = '0'
      toolbar.style.top = '0'
      toolbar.style.width = width
      toolbar.style.height = '100%'
      break
  }

}

function createButtons(toolbar, style, buttons = [{
  label: 'toolbarjs',
  click: event => {
    console.log('Add some buttons!')
  }
}]) {
  buttons.forEach((button) => {
      if (button.type == "split") {
         const divNode = document.createElement('label')
         //divNode.style.border = '0px '
         divNode.style.marginLeft = '8px '
         divNode.style.marginRight = '8px '
         divNode.classList.add("splitter");
         toolbar.appendChild(divNode)

      }  else  if (button.type == "click") {
         if (button.label.startsWith("data:image/svg+xml")) {
            let imgNode = document.createElement('img')
            imgNode.style.border = '0px '
            imgNode.style.marginLeft = button.marginLeft;
            imgNode.style.backgroundColor = style.button_color
            imgNode.classList.add("button_off");
            imgNode.setAttribute("src", button.label);
            imgNode.addEventListener('click', button.click)
            toolbar.appendChild(imgNode)
         } else {
            let btnNode = document.createElement('button')
            btnNode.style.border = '0px '
            btnNode.style.marginLeft = button.marginLeft;
            btnNode.style.backgroundColor = style.button_color
            btnNode.classList.add("button_off");
            btnNode.innerHTML = button.label
            btnNode.addEventListener('click', button.click)
            toolbar.appendChild(btnNode)
	 }
  
      }  else  if (button.type == "toggle") {
         const btnNode = document.createElement('button')
         //btnNode.style.boxShadow = '1px 1px 0px 0px rgba(0, 0, 0, 0.125)'
         btnNode.style.border = '0px'
         //btnNode.style.border = '1px solid #333'
         //btnNode.style.marginLeft = '3px'
         btnNode.style.marginLeft = button.marginLeft;
         btnNode.style.backgroundColor = style.button_color
         btnNode.classList.add("button_off");

         btnNode.innerHTML = button.label
         btnNode.addEventListener('click', (event) => {
             if (btnNode.classList.contains("button_off")) {
                         btnNode.classList.remove("button_off");
                         btnNode.classList.add("button_on");
		         button.onclick();
	     
	     } else if (btnNode.classList.contains("button_on")) {
                         btnNode.classList.remove("button_on");
                         btnNode.classList.add("button_off");
		         button.offclick();
	     }
	 });

         toolbar.appendChild(btnNode)
  
      }  else  if (button.type == "menu") {
         const uiNode = document.createElement('select')
         //uiNode.style.boxShadow = '1px 1px 0px 0px rgba(0, 0, 0, 0.125)'
         uiNode.style.border = '0px'
         //uiNode.style.marginLeft = '3px'
         uiNode.style.marginLeft = button.marginLeft;
         uiNode.style.backgroundColor = style.button_color
         uiNode.classList.add("button_off");
         uiNode.innerHTML = button.label
         uiNode.addEventListener('change', button.change)
         toolbar.appendChild(uiNode)
         button.menu.forEach((entry) => {
                const liNode = document.createElement('option')
                liNode.innerHTML = entry.label
                liNode.value = entry.value
                liNode.style.backgroundColor = style.button_color
                uiNode.appendChild(liNode)
	 })
      }  else  if (button.type == "color") {
         const input = document.createElement('input')
	 input.id = "color";
         input.style.border = "0px";
         //input.style.marginLeft = "3px";
         input.style.marginLeft = button.marginLeft;
         input.style.width = "50px";
	 input.setAttribute("type", "color");

  	 input.setAttribute("list", "color-picker");
         const datalist = document.createElement('datalist')
	 datalist.id = "color-picker";
                const option1 = document.createElement('option')
	        option1.setAttribute("value", "#ff0000");
                datalist.appendChild(option1)
                const option2 = document.createElement('option')
	        option2.setAttribute("value", "#00ff00");
                datalist.appendChild(option2)
                const option3 = document.createElement('option')
	        option3.setAttribute("value", "#0000ff");
                datalist.appendChild(option3)

         toolbar.appendChild(input)
         toolbar.appendChild(datalist)

         const buttonNode = document.createElement('button')
         buttonNode.style.border = '0px'
         buttonNode.style.marginLeft = '0px'
         buttonNode.classList.add("button_off");
         buttonNode.innerHTML = button.label
         buttonNode.addEventListener('click', button.select)
         toolbar.appendChild(buttonNode)
      
      }
  })
  
}

function createButtons__(toolbar, style, buttons = [{
  label: 'toolbarjs',
  click: event => {
    console.log('Add some buttons!')
  }
}]) {
  buttons.forEach((button) => {

    const btnNode = document.createElement('button')
    btnNode.style.boxShadow = '1px 1px 0px 0px rgba(0, 0, 0, 0.125)'
    btnNode.style.border = '0px'
    btnNode.style.margin = '1px'
    btnNode.style.backgroundColor = style.button_color


    btnNode.innerHTML = button.label

    btnNode.addEventListener('click', button.click)

    toolbar.appendChild(btnNode)
  })
}
