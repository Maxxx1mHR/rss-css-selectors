import './index.html';
import './index.scss';
import App from './modules/components/app';
import { dataGameLevels } from './modules/data/data-game-levels';
import BoatView from './modules/view/boat-view';
import HtmlView from './modules/view/html-view';
import MenuView from './modules/view/menu-view';

// const blockExample = new BoatView();

// blockExample.createView(dataGameLevels, 4);

// const blockHTML = new HtmlView();

// blockHTML.createView(dataGameLevels, 4);
// const menu = new MenuView();
// menu.addEventListner();
// menu.createView(dataGameLevels, 4);
let level = 0;
// new App(dataGameLevels, level);
new App(dataGameLevels, level);

document.addEventListener('click', (event) => {
  if (event.target instanceof HTMLElement) {
    const prevButton = event.target.closest('.menu__prev');
    const nextButton = event.target.closest('.menu__next');
    if (prevButton) {
      console.log(level);
      level -= 1;
      if (level < 0) {
        level = 0;
      }
      new App(dataGameLevels, level);
    }
    if (nextButton) {
      console.log(level);
      level += 1;
      if (level > dataGameLevels.length - 1) {
        level = dataGameLevels.length - 1;
      }
      new App(dataGameLevels, level);
    }
  }
});
