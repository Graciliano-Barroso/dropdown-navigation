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

const buttonMenu = document.querySelector('.menu-img');


      buttonMenu.addEventListener('click', ()=> {
        document.querySelector('.mobile-nav').classList.add('show');
        document.querySelector('.overlay').style.display = 'block';
      });

      document.querySelector('.close-menu').addEventListener('click', ()=> {
        document.querySelector('.mobile-nav').classList.remove('show');
        document.querySelector('.overlay').style.display = 'none';
      });