import './index.html';
import './index.scss';
import App from './modules/components/app';
import { dataGameLevels } from './modules/data/data-game-levels';
import { getLocalStorageArray } from './modules/view/boat-view';

let level = 0;

if (localStorage.getItem('currentCssSelectorLevel') === null) {
  +localStorage.setItem('currentCssSelectorLevel', String(0));
  new App(dataGameLevels, level);
} else {
  level = +getLocalStorageArray('currentCssSelectorLevel');
  new App(dataGameLevels, level);
}
