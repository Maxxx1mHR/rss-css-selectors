import { IElement } from '../types';

class ElementCreator {
  element: HTMLElement | null;
  constructor(param: IElement) {
    this.element = null;
    this.createElement(param);
  }

  createElement(param: IElement) {
    this.element = document.createElement(param.tag);
    this.setCssClasses(param.className);
    this.setTextContent(param.textContent);
  }

  setCssClasses(cssClasses: string[]) {
    cssClasses.forEach((className) => {
      if (this.element) {
        this.element.classList.add(className);
      }
    });
  }

  setTextContent(text: string) {
    if (this.element) {
      this.element.textContent = text;
    }
  }
  appendNodeToDom(domNode: HTMLElement) {
    if (this.element) {
      domNode.append(this.element);
    }
  }
}

export default ElementCreator;
