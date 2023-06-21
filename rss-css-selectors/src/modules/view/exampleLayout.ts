import ElementCreator from '../components/element-creator';

import { IDataLevel } from '../types';

import shapesEventListner from './shapesEventListner';

class exampleLayout {
  createView(data: IDataLevel[], level: number) {
    const hoverEffect = new shapesEventListner();
    hoverEffect.addHoverEffects();
    const boat = new ElementCreator({
      tag: 'div',
      className: ['boat'],
    });
    boat.appendNodeToDom(document.querySelector('.boat-surface')!);
    boat.setTextContent(data[level].dataExampleLayout);
  }
}
export default exampleLayout;
