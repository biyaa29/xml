function get(){
let a=document.getElementById("input").value;
//console.log(a)}

const ul =document.querySelector("ul")
   ul.innerHTML += `<div>
     <li>${a}</li>
     <button onclick="updateitem(this)">update</button>
     <button onclick="deleteItem(this)">delete</button>
     </div>
     `
     // remove content from  searchbar
  document.getElementById("input").value="";

}
function deleteItem(getobject) {
//  console.log(getobject)
    getobject.parentElement.remove()
}
function updateitem(getobject){
getobject.parentElement.children[0].setAttribute("contentEditable",true)
}
