const form = document.querySelector('#btn');
const name= document.querySelector('#name');
const email = document.querySelector('#email');

document.getElementById("btn").addEventListener("click", onsubmit);
function onsubmit(){
    
   if(name.value=='' || email.value==''){
    alert('Enter your credintials!');
   } 
   else{
    console.log("Name :"+name.value+"Email"+email.value);
   }
   
}
//DOM Manupulation----
// console.log(document.URL);
// console.log(document.title);
// console.log(document.links);
 console.log(document.getElementById('form'));
var a =document.getElementById('form');
console.log(a.textContent)
//form.style.backgroundColor ='green'
li2.style.backgroundColor = 'green';
form.style.fontweight = 'Bold';

const collection = document.getElementsByClassName('li2');
for (let i = 0; i < collection.length; i++) {
   collection[i].style.backgroundColor = "red";
 }
 const li = document.getElementsByTagName('li');
 li[1].style.backgroundColor='yellow'


