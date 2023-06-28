import './index.html';
import './index.scss';
import App from './modules/components/app';
import { dataGameLevels } from './modules/data/data-game-levels';

let level = 0;

if (localStorage.getItem('currentCssSelectorLevel') === null) {
  +localStorage.setItem('currentCssSelectorLevel', String(0));
  new App(dataGameLevels, level);
} else {
  level = JSON.parse(localStorage.getItem('currentCssSelectorLevel') || '{}');
  new App(dataGameLevels, level);
}
