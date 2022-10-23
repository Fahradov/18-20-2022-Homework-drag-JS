let items=document.getElementsByClassName("item")
let areas=document.getElementsByClassName("area")
let fruit=document.getElementsByClassName("fruits")
let vegetable=document.getElementsByClassName("vegetables")
let dragItem;
for (const item of items) {
  item.addEventListener('dragstart', ()=>{
      dragItem = item;
  })
}
for (const area of areas) {
  area.addEventListener('dragover',e=>{
      e.preventDefault();
  })
  area.addEventListener('drop',()=>{
      if (dragItem.classList[0]==area.classList[2]) {
        console.log("true")
        dragItem.remove()
      }
      else {
        console.log("false")
        alert("zehmet olmasa duzgun sebete daxil")
      }
  })
}
