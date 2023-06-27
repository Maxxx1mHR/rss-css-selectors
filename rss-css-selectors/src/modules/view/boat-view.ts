import ElementCreator from '../components/element-creator';
import { IDataLevel } from '../types/types';

class BoatView {
  constructor(data: IDataLevel[], level: number) {
    this.createView(data, level);
    this.mouseoverEvent();
    this.mouseoutEvent();
    this.helpButtonClick(data, level);
  }

  private createView(data: IDataLevel[], level: number): void {
    const gameWrapper: HTMLElement | null = document.querySelector('.game__wrapper');

    if (gameWrapper) {
      gameWrapper.innerHTML = '';
    }
    const gameTask = new ElementCreator({
      tag: 'h2',
      className: ['game__task'],
      textContent: data[level].taskTitle,
    });

    gameTask.appendNodeToDom(gameWrapper);

    const gameHelp = new ElementCreator({
      tag: 'div',
      className: ['game__help'],
      textContent: 'Help, I&#39m stuck!',
    });

    gameHelp.appendNodeToDom(gameWrapper);

    const boatSurface = new ElementCreator({
      tag: 'div',
      className: ['boat-surface'],
    });

    boatSurface.appendNodeToDom(gameWrapper);

    const boat = new ElementCreator({
      tag: 'div',
      className: ['boat'],
      textContent: data[level].dataExampleLayout,
    });

    if (boatSurface.getElement() instanceof HTMLElement) {
      boat.appendNodeToDom(boatSurface.getElement());
    }
    // const elementCreator = new ElementCreator({
    //   tag: 'div',
    //   className: ['boat'],
    //   textContent: data[level].dataExampleLayout,
    // });
    // const boatSurface = document.querySelector('.boat-surface');
    // if (boatSurface instanceof HTMLElement) {
    //   boatSurface.innerHTML = '';
    //   elementCreator.appendNodeToDom(boatSurface);
    // }
    // const gameTaskElementCreate = new ElementCreator({
    //   tag: 'h2',
    //   className: ['game__task'],
    //   textContent: data[level].dataExampleLayout,
    // });
    // const gameWrapper = document.querySelector('.game__task');
  }

  private mouseoverEvent(): void {
    document.addEventListener('mouseover', (event) => {
      if (event.target instanceof HTMLElement) {
        const code = event.target.closest('.code');
        const shape = event.target.closest('.shape');
        const id = event.target.dataset.id;
        if (shape) {
          // shape.classList.add('hover');
          document.querySelector(`.shape[data-id='${id}']`)?.classList.add('hover', 'lighting-code');
          document.querySelector(`.shape-help[data-id='${id}']`)?.classList.add('shape-help-active');
          document.querySelector(`.code[data-id='${id}']`)?.classList.add('lighting-code');
        }
        if (code) {
          code.classList.add('lighting-code');
          document.querySelector(`.shape[data-id='${id}']`)?.classList.add('hover');
          document.querySelector(`.shape-help[data-id='${id}']`)?.classList.add('shape-help-active');
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
          // shape.classList.remove('hover');
          document.querySelector(`.shape[data-id='${id}']`)?.classList.remove('hover', 'lighting-code');
          document.querySelector(`.shape-help[data-id='${id}']`)?.classList.remove('shape-help-active');
          document.querySelector(`.code[data-id='${id}']`)?.classList.remove('lighting-code');
        }
        if (code) {
          code.classList.remove('lighting-code');
          document.querySelector(`.shape[data-id='${id}']`)?.classList.remove('hover');
          document.querySelector(`.shape-help[data-id='${id}']`)?.classList.remove('shape-help-active');
        }
      }
    });
  }

  private helpButtonClick(data: IDataLevel[], level: number): void {
    const gameHelp = document.querySelector('.game__help');
    gameHelp?.addEventListener('click', () => {
      const input = document.querySelector('.editor__input');
      if (input instanceof HTMLInputElement) {
        let i = 0;
        const timerId = setInterval(() => {
          input.value += data[level].correctSeletor[i];
          i++;
          if (input.value.length === data[level].correctSeletor.length) {
            clearInterval(timerId);
          }
        }, 200);
      }
    });
  }
}
export default BoatView;
