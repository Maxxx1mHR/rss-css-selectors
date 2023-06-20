import './index.html';
import './index.scss';
import { dataExampleLayout, dataHTMLViewer, dataLevelsGame } from './modules/data/dataExampleLayout';
import exampleLayout from './modules/view/exampleLayout';
import htmlViewer from './modules/view/htmlViewer';
import Menu from './modules/components/menu';

const blockExample = new exampleLayout();
// blockExample.addLayout(dataExampleLayout, 5);
blockExample.addLayout(dataLevelsGame, 0);
const blockHTML = new htmlViewer();
// blockHTML.addLayout(dataHTMLViewer, 5);
blockHTML.addLayout(dataLevelsGame, 0);
const menu = new Menu();
menu.addEventListner();
