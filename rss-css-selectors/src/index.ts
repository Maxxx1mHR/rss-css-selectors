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
new App(dataGameLevels, 2);
