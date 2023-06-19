class Menu {
  addEventListner() {
    document.addEventListener('click', (event) => {
      if (event.target instanceof HTMLElement) {
        if (event.target.closest('.hamburger')) {
          console.log('123');
          document.querySelector('.menu')?.classList.add('active');
        }
        if (event.target.closest('.menu__close')) {
          console.log('123');
          document.querySelector('.menu')?.classList.remove('active');
        }
      }
    });
  }
}

export default Menu;
