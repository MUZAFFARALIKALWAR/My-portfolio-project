
const menu_btn = document.getElementById("menubtn");
const navbar = document.getElementById("nav-links");
menu_btn.addEventListener("click", () => {
  navbar.classList.toggle("active"); // Toggle the 'active' class
});

let count = 0
let btn = document.getElementById("kjm");
let container = document.getElementById("social-media")

btn.addEventListener("click",()=>{
 if(count == 0){
    container.style.backgroundColor = "black";
    container.style.color = "white";
   count = 1
 }else{
    container.style.backgroundColor = "white";
    container.style.color = "black";
     count = 0
 }
})

let btn2 = document.getElementById("chng");
let container2 = document.getElementById("color-changer");
let container3 = document.getElementById("color-changer2");
btn2.addEventListener("click",()=>{
  if(count == 0){
    container2.style.backgroundColor = "white";
    container3.style.backgroundColor = "white";
    container3.style.color = "black";
    count = 1;
  }else{
    container2.style.backgroundColor = "black";
    container3.style.backgroundColor = "black";
    container3.style.color = "white";
    count = 0;
  }
})