import { IElement } from '../types/types';

class ElementCreator {
  element: HTMLElement | null;
  constructor(param: IElement) {
    this.element = null;
    this.createElement(param);
  }

  createElement(param: IElement) {
    this.element = document.createElement(param.tag);
    this.setCssClasses(param.className);
    if (param.textContent) {
      this.setTextContent(param.textContent);
    }
    if (param.src && param.alt) {
      this.setSrc(param.src);
      this.setAlt(param.alt);
    }
  }

  getElement() {
    return this.element;
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
      this.element.innerHTML = text;
    }
  }

  setSrc(src: string) {
    if (this.element instanceof HTMLImageElement) {
      this.element.src = src;
    }
  }

  setAlt(alt: string) {
    if (this.element instanceof HTMLImageElement) {
      this.element.alt = alt;
    }
  }

  appendNodeToDom(domNode: HTMLElement) {
    if (this.element) {
      domNode.append(this.element);
    }
  }
}

export default ElementCreator;
