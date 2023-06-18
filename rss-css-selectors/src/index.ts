import './index.html';
import './index.scss';
import exampleLayout from './modules/view/exampleLayout';
import htmlViewer from './modules/view/htmlViewer';

const blockExample = new exampleLayout();
blockExample.addLayout();
const blockHTML = new htmlViewer();
blockHTML.addLayout();
