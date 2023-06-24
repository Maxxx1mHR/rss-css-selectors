import ElementCreator from '../components/element-creator';
import { IDataLevel } from '../types/types';

class CssView {
  constructor(data: IDataLevel[], level: number) {
    this.createView();
    this.clickButton(data, level);
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
    const boat = document.querySelector('.boat');
    if (addButton) {
      addButton.addEventListener('click', (event) => {
        if (event.target instanceof HTMLButtonElement) {
          const input = document.querySelector('.editor__input');
          if (input instanceof HTMLInputElement) {
            if (boat) {
              try {
                const cssSelector = boat.querySelectorAll(input.value);
                const dataSelector = boat.querySelectorAll(data[level].correctSeletor);
                if (this.nodeListsAreEqual(cssSelector, dataSelector)) {
                  console.log('1');
                }
              } catch {
                event.preventDefault();
              }
            }
          }
          // }
        }
      });
    }
  }
  private nodeListsAreEqual(list1: NodeList, list2: NodeList): boolean {
    if (list1.length !== list2.length) {
      return false;
    }
    return Array.from(list1).every((node, index) => node === list2[index]);
  }
}

export default CssView;
