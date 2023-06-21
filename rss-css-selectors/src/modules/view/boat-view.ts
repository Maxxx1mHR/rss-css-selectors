import ElementCreator from '../components/element-creator';

import { IDataLevel } from '../types/types';

import shapesEventListner from './shapesEventListner';

class BoatView {
  constructor(data: IDataLevel[], level: number) {
    this.createView(data, level);
  }
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
export default BoatView;
