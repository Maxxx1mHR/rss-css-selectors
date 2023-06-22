import './index.html';
import './index.scss';
import App from './modules/components/app';
import { dataGameLevels } from './modules/data/data-game-levels';

let level = 0;

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
