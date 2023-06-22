import ElementCreator from '../components/element-creator';
import { IDataLevel } from '../types/types';

class BoatView {
  constructor(data: IDataLevel[], level: number) {
    this.createView(data, level);
    this.mouseoverEvent();
    this.mouseoutEvent();
  }

  private createView(data: IDataLevel[], level: number): void {
    const elementCreator = new ElementCreator({
      tag: 'div',
      className: ['boat'],
      textContent: data[level].dataExampleLayout,
    });
    const boatSurface = document.querySelector('.boat-surface');
    if (boatSurface instanceof HTMLElement) {
      boatSurface.innerHTML = '';
      elementCreator.appendNodeToDom(boatSurface);
    }
  }

  private mouseoverEvent(): void {
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

  private mouseoutEvent(): void {
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
