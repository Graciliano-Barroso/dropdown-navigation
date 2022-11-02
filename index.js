let dropdown = document.getElementsByClassName("dropdown-btn");
let i;

for (i = 0; i < dropdown.length; i++) {

  dropdown[i].addEventListener("click", function() {

    this.classList.toggle("active");

    let dropdownContent = this.nextElementSibling;

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

toggle.addEventListener('click', ()=>{
  toggle.classList.toggle('active');
});

botaoMenu.addEventListener('click', (event)=> {
  event.preventDefault();
    menuLateral.classList.toggle('nav-ul-ativo');
    bg.classList.toggle("bg-ativo");
});