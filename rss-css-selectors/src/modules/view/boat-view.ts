import ElementCreator from '../components/element-creator';
import { IDataLevel } from '../types/types';

class BoatView {
  constructor(data: IDataLevel[], level: number) {
    this.createView(data, level);
    this.mouseoverShape();
    this.mouseoutShape();
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

    const cssHelp = new ElementCreator({
      tag: 'div',
      className: ['boat__css-help'],
      textContent: data[level].dataHelpCss,
    });

    if (boatSurface.getElement() instanceof HTMLElement) {
      boat.appendNodeToDom(boatSurface.getElement());
      cssHelp.appendNodeToDom(boatSurface.getElement());
    }
  }

  private mouseoverShape(): void {
    const boat = document.querySelector('.boat-surface');
    boat?.addEventListener('mouseover', (event) => {
      if (event.target instanceof HTMLElement) {
        const id = event.target.dataset.id;
        document.querySelector(`.shape[data-id='${id}']`)?.classList.add('hover', 'lighting-code');
        document.querySelector(`.shape-help[data-id='${id}']`)?.classList.add('shape-help-active');
        document.querySelector(`.code[data-id='${id}']`)?.classList.add('lighting-code');
      }
    });
  }

  private mouseoutShape(): void {
    const boat = document.querySelector('.boat-surface');
    boat?.addEventListener('mouseout', (event) => {
      if (event.target instanceof HTMLElement) {
        const id = event.target.dataset.id;
        document.querySelector(`.shape[data-id='${id}']`)?.classList.remove('hover', 'lighting-code');
        document.querySelector(`.shape-help[data-id='${id}']`)?.classList.remove('shape-help-active');
        document.querySelector(`.code[data-id='${id}']`)?.classList.remove('lighting-code');
      }
    });
  }

  public helpButtonClick(data: IDataLevel[], level: number): void {
    const gameHelp = document.querySelector('.game__help');
    gameHelp?.addEventListener('click', () => {
      const input = document.querySelector('.editor__input');
      if (input instanceof HTMLInputElement && input.value === '') {
        let i = 0;
        this.addHelpClass(level);
        const timerId = setInterval(() => {
          input.value += data[level].correctSeletor[i];
          i++;
          if (input.value.length === data[level].correctSeletor.length) {
            clearInterval(timerId);
          }
        }, 20);
      }
    });
  }

  public addHelpClass(level: number): void {
    const levelsComplete = getLocalStorageArray('completedLevels');
    const levelsHelp = getLocalStorageArray('levelsWithUseHelp');
    if (localStorage.getItem('levelsWithUseHelp') === null && !levelsComplete.includes(level)) {
      localStorage.setItem('levelsWithUseHelp', JSON.stringify([level]));
    } else if (!levelsHelp.includes(level) && !levelsComplete.includes(level)) {
      levelsHelp.push(level);
      localStorage.setItem('levelsWithUseHelp', JSON.stringify(levelsHelp));
    }
  }
}

export function getLocalStorageArray(key: string): Storage {
  return JSON.parse(localStorage.getItem(key) || '[]');
}

export default BoatView;
