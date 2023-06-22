import { IElement } from '../types/types';

class ElementCreator {
  private element: HTMLElement | null;
  constructor(param: IElement) {
    this.element = null;
    this.createElement(param);
  }

  private createElement(param: IElement): void {
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

  public getElement(): HTMLElement | null {
    return this.element;
  }

  private setCssClasses(cssClasses: string[]): void {
    cssClasses.forEach((className) => {
      if (this.element) {
        this.element.classList.add(className);
      }
    });
  }

  private setTextContent(text: string): void {
    if (this.element) {
      this.element.innerHTML = text;
    }
  }

  private setSrc(src: string): void {
    if (this.element instanceof HTMLImageElement) {
      this.element.src = src;
    }
  }

  private setAlt(alt: string): void {
    if (this.element instanceof HTMLImageElement) {
      this.element.alt = alt;
    }
  }

  public appendNodeToDom(domNode: HTMLElement | null): void {
    if (this.element && domNode) {
      domNode.append(this.element);
    }
  }
}

export default ElementCreator;
