
//DOM Manupulation----
// console.log(document.URL);
// console.log(document.title);
// console.log(document.links);
 //console.log(document.getElementById('form'));
var a =document.getElementById('form');
console.log(a.textContent)
//form.style.backgroundColor ='green'
li2.style.backgroundColor = 'green';
form.style.fontweight = 'Bold';

/*const collection = document.getElementsByClassName('li2');
for (let i = 0; i < collection.length; i++) {
   collection[i].style.backgroundColor = "red";
 }
 const li = document.getElementsByTagName('li');
 li[1].style.backgroundColor='yellow'

var odd = document.querySelectorAll('li:nth-child(odd)');
var item = document.querySelectorAll(".list-group-item");
item[1].style.color="green";
for(var i =0;i<odd.length;i++){
 odd[i].style.backgroundColor ='green';
}*/

// var newd = document.createElement('div');
// //console.log(newd);
// newd.className = "hello1"
// newd.setAttribute('title','helloD')
// var newdText = document.createTextNode("hello world")
// newd.appendChild(newdText);
// var contain = document.querySelector(".container")
// var h1 = document.querySelector(" h1")

// newd.style.fontSize = "44px";
// contain.insertBefore(newd,h1);


// var form  = document.getElementById("addform");
// var itemList = document.getElementById("items");
// form.addEventListener("click",addItem);
// itemList.addEventListener("click",remove);

// function remove(e){
    
//   if(e.target.classList.contains("delete")){
//     if(confirm('Are you sure')){
//         var li= e.target.parentElement;
//         itemList.removeChild(li);
//     }
//   }
// }
// function addItem(e){
//   //  e.preventDefoult();
//     var newItem = document.getElementById("items").value;
//     var li= document.createElement( "li");
//     li.className = "list-group-item";
//     li.appendChild(document.createTextNode(newItem));
//      var btn = document.createElement("button");
//      btn.className = "btn btn-danger btn-sm float-right delete";
//      btn.appendChild(document.createTextNode("delete"));
//      li.appendChild(btn)
//     itemList.appendChild(li);
   
// }

var filter= document.getElementById('filter');
// filter.addEventListener("click",search);

// function search(e){
//     var text= e.target.value.toLowerCase();
//     var items = itemList.getElementsByTagName('li');
//     Array.from(items).forEach(function(item){
//         var itemName = items.firstChild.textContent;
//       if(itemName.toLowerCase().indexOf(text)!=-1){
//         item.style.display = 'block';
//       }
//       else{
//         item.style.display = 'none';
//       }
    
//     })
// }
