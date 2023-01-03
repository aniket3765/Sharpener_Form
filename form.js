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
