import ElementCreator from '../components/element-creator';

import { IDataLevel } from '../types/types';

// import shapesEventListner from './shapesEventListner';

class BoatView {
  elementCreator: ElementCreator;
  constructor(data: IDataLevel[], level: number) {
    this.elementCreator = this.createView(data, level);
    // this.elementCreator.getElement();
    this.mouseoverEvent();
    this.mouseoutEvent();
  }

  getHtmlElement() {
    return this.elementCreator.getElement();
  }

  createView(data: IDataLevel[], level: number) {
    // const hoverEffect = new shapesEventListner();
    // hoverEffect.addHoverEffects();
    const elementCreator = new ElementCreator({
      tag: 'div',
      className: ['boat'],
    });

    document.querySelector('.boat-surface')!.innerHTML = '';
    elementCreator.appendNodeToDom(document.querySelector('.boat-surface')!);

    elementCreator.setTextContent(data[level].dataExampleLayout);
    return elementCreator;
  }

  mouseoverEvent() {
    document.addEventListener('mouseover', (event) => {
      if (event.target instanceof HTMLElement) {
        const code = event.target.closest('.code');
        const shape = event.target.closest('.shape');
        const id = event.target.dataset.id;
        if (shape) {
          shape.classList.add('hover');
          document.querySelector(`.shape[data-id='${id}']`)?.classList.add('lighting-code', 'lighting-tag');
          document.querySelector(`.code[data-id='${id}']`)?.classList.add('lighting-code');
        }
        if (code) {
          code.classList.add('lighting-code');
          document.querySelector(`.shape[data-id='${id}']`)?.classList.add('hover', 'lighting-tag');
        }
      }
    });
  }
  mouseoutEvent() {
    document.addEventListener('mouseout', (event) => {
      if (event.target instanceof HTMLElement) {
        const code = event.target.closest('.code');
        const shape = event.target.closest('.shape');
        const id = event.target.dataset.id;
        if (shape) {
          shape.classList.remove('hover');
          document.querySelector(`.shape[data-id='${id}']`)?.classList.remove('hover', 'lighting-code', 'lighting-tag');
          document.querySelector(`.code[data-id='${id}']`)?.classList.remove('lighting-code');
        }
        if (code) {
          code.classList.remove('lighting-code');
          document.querySelector(`.shape[data-id='${id}']`)?.classList.remove('hover', 'lighting-tag');
        }
      }
    });
  }
}
export default BoatView;
