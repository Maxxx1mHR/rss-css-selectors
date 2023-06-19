import './index.html';
import './index.scss';
import { dataExampleLayout, dataHTMLViewer } from './modules/data/dataExampleLayout';
import exampleLayout from './modules/view/exampleLayout';
import htmlViewer from './modules/view/htmlViewer';
import Menu from './modules/components/menu';

const blockExample = new exampleLayout();
blockExample.addLayout(dataExampleLayout, 5);
const blockHTML = new htmlViewer();
blockHTML.addLayout(dataHTMLViewer, 5);
const menu = new Menu();
menu.addEventListner();
