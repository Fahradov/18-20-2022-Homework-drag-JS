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
      // console.log(dragItem.classList[0],area.classList[2]);
      if (dragItem.classList[0]==area.classList[2]) {
        console.log("true")
        area.appendChild(dragItem)
      }
      else {
        console.log("false")
        alert("zehmet olmasa duzgun sebete daxil")
      }
  })
}
