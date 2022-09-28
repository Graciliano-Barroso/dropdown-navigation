const buttonMenu = document.querySelector('.menu-img');

      buttonMenu.addEventListener('click', ()=> {
        document.querySelector('.mobile-nav').classList.add('show');
        document.querySelector('.overlay').style.display = 'block';
        document.body.classList.add('lock');
      });

      document.querySelector('.close-menu').addEventListener('click', ()=> {
        document.querySelector('.mobile-nav').classList.remove('show');
        document.querySelector('.overlay').style.display = 'none';
        document.body.classList.remove('lock');
      });