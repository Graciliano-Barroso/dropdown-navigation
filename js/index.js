var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {

  dropdown[i].addEventListener("click", function() {

    this.classList.toggle("active");

    var dropdownContent = this.nextElementSibling;

    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

let toggle = document.getElementById('toggle');
let botaoMenu = document.querySelector(".box");
let bg = document.querySelector(".bg");
let menuLateral = document.querySelector(".nav-ul");

toggle.onclick = function(){
    toggle.classList.toggle('active');
}

botaoMenu.addEventListener('click', ()=> {
    menuLateral.classList.toggle('nav-ul-ativo');
    bg.classList.toggle("bg-ativo");
});