import './index.html';
import './index.scss';
import { dataLevelsGame } from './modules/data/dataExampleLayout';
import exampleLayout from './modules/view/exampleLayout';
import htmlViewer from './modules/view/htmlViewer';
import Menu from './modules/components/menu';

const blockExample = new exampleLayout();

blockExample.createView(dataLevelsGame, 4);
const blockHTML = new htmlViewer();

blockHTML.createView(dataLevelsGame, 4);
const menu = new Menu();
menu.addEventListner();
menu.createView(dataLevelsGame, 4);
