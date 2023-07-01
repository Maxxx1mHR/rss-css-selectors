import App from '../components/app';
import ElementCreator from '../components/element-creator';
import { dataGameLevels } from '../data/data-game-levels';
import { IDataLevel } from '../types/types';

class CssView {
  constructor(data: IDataLevel[], level: number) {
    this.createView();
    this.clickButton(data, level);
    this.pressButton(data, level);
  }

  private createView(): void {
    const input = new ElementCreator({
      tag: 'input',
      className: ['editor__input'],
      id: 'css',
      type: 'text',
    });
    const addButton = new ElementCreator({
      tag: 'button',
      className: ['editor__button'],
      textContent: 'Enter',
      id: 'add',
    });

    const editorSelector = document.querySelector('.editor__selector');
    if (editorSelector) {
      editorSelector.innerHTML = '';
    }
    if (editorSelector instanceof HTMLElement) {
      input.appendNodeToDom(editorSelector);
      addButton.appendNodeToDom(editorSelector);
    }
  }

  private clickButton(data: IDataLevel[], level: number): void {
    const addButton = document.querySelector('.editor__button');

    if (addButton) {
      addButton.addEventListener('click', (event) => {
        if (event.target instanceof HTMLButtonElement) {
          // console.log('test');

          this.getValueFromInput(data, level);
        }
      });
    }
  }

  private pressButton(data: IDataLevel[], level: number): void {
    const input = document.querySelector('.editor__input');
    const func = (event: Event): void => {
      if (event instanceof KeyboardEvent) {
        if (event instanceof KeyboardEvent && input instanceof HTMLInputElement) {
          if (event.key === 'Enter' && input.value.trim().length !== 0) {
            console.log('test123');
            this.getValueFromInput(data, level);
          }
        }
      }
      document.removeEventListener('keydown', func);
    };
    document.addEventListener('keydown', func);
  }

  private nodeListsAreEqual(list1: NodeList, list2: NodeList): boolean {
    if (list1.length !== list2.length) {
      return false;
    }
    return Array.from(list1).every((node, index) => node === list2[index]);
  }

  private levelComplete(data: IDataLevel[], level: number): void {
    this.addCheckClass(level);
    const levelsCompleted =
      +JSON.parse(localStorage.getItem('completedLevels') || '[]').length +
      +JSON.parse(localStorage.getItem('levelsWithUseHelp') || '[]').length;
    if (levelsCompleted === data.length) {
      setTimeout(() => {
        document.querySelector('.modal')?.classList.add('modal__active');
      }, 900);
    }

    level += 1;
    if (level > data.length - 1) {
      level = data.length - 1;
    }
    this.setCurrentLevelGame(level);

    setTimeout(() => {
      new App(data, level);
      this.switchCurrentLevel(level);
    }, 900);
  }

  private addCheckClass(level: number): void {
    const levelsComplete = JSON.parse(localStorage.getItem('completedLevels') || '[]');
    const levelsHelp = JSON.parse(localStorage.getItem('levelsWithUseHelp') || '[]');
    if (localStorage.getItem('completedLevels') === null && !levelsHelp.includes(level)) {
      localStorage.setItem('completedLevels', JSON.stringify([level]));
    } else {
      if (!levelsComplete.includes(level) && !levelsHelp.includes(level)) {
        levelsComplete.push(level);
        localStorage.setItem('completedLevels', JSON.stringify(levelsComplete));
      }
    }
  }

  private setCurrentLevelGame(level: number): void {
    localStorage.setItem('currentCssSelectorLevel', String(level));
  }

  private addAnimation(selector: NodeList, animationName: string): void {
    selector.forEach((item) => {
      if (item instanceof HTMLElement) {
        item.classList.add(animationName);
      }
    });
  }

  private removeAnimation(selector: NodeList, animationName: string): void {
    selector.forEach((item) => {
      if (item instanceof HTMLElement) {
        item.addEventListener('animationend', () => {
          item.classList.remove(animationName);
        });
      }
    });
  }

  private switchCurrentLevel(level: number): void {
    const menuLevelItem = document.querySelectorAll('.menu__levels-item');
    menuLevelItem.forEach((item) => {
      item.classList.remove('menu__current-level');
      menuLevelItem[level].classList.add('menu__current-level');
    });
  }

  private getValueFromInput(data: IDataLevel[], level: number): void {
    const boat = document.querySelector('.boat');
    const input = document.querySelector('.editor__input');

    if (input instanceof HTMLInputElement && boat) {
      try {
        const cssSelector = boat.querySelectorAll(input.value);
        // console.log('css', cssSelector.length);
        // console.log('cssSel', cssSelector);
        // const something = document.querySelectorAll(input.value);
        // console.log('Test', cssSelector);
        const dataSelector = boat.querySelectorAll(data[level].correctSeletor);
        // console.log('data', dataSelector);
        if (this.nodeListsAreEqual(cssSelector, dataSelector)) {
          this.levelComplete(dataGameLevels, level);
          this.addAnimation(cssSelector, 'animation-drop');
        }
        // else {
        //   this.addAnimation(cssSelector, 'animation-shake');
        //   this.removeAnimation(cssSelector, 'animation-shake');
        // }
        else if (cssSelector && cssSelector.length !== 0 && !this.nodeListsAreEqual(cssSelector, dataSelector)) {
          console.log('true');
          this.addAnimation(cssSelector, 'animation-shake');
          this.removeAnimation(cssSelector, 'animation-shake');
        } else {
          const editor = document.querySelectorAll('.editor');
          this.addAnimation(editor, 'animation-shake');
          this.removeAnimation(editor, 'animation-shake');
        }
      } catch {
        console.log('catch');
        // const cssSelector = boat.querySelectorAll(input.value);
        const editor = document.querySelectorAll('.editor');

        // if (cssSelector) {
        // this.addAnimation(cssSelector, 'animation-shake');
        // this.removeAnimation(cssSelector, 'animation-shake');
        // } else {
        this.addAnimation(editor, 'animation-shake');
        this.removeAnimation(editor, 'animation-shake');

        // }
        return;
        event?.preventDefault();
      }
    }
  }
}

export default CssView;
