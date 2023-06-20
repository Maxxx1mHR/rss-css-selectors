import { IDataLevel } from '../types';
import ElementCreator from './element-creator';

class Menu {
  addEventListner() {
    document.addEventListener('click', (event) => {
      if (event.target instanceof HTMLElement) {
        if (event.target.closest('.hamburger')) {
          console.log('123');
          document.querySelector('.menu')?.classList.add('active');
        }
        if (event.target.closest('.menu__close')) {
          console.log('123');
          document.querySelector('.menu')?.classList.remove('active');
        }
      }
    });
  }

  // addLayout(data: IDataLevel[], level: number) {
  //   const menuHeader = document.querySelector('.menu__header');
  // }

  // createNode = (element: string, content: string, ...classes: string[]): HTMLElement => {
  //   const node = document.createElement(element);
  //   node.classList.add(...classes);
  //   node.textContent = content;
  //   return node;
  // };

  // appendNodeToDom = (domNode: HTMLElement, ...newNode: HTMLElement[]): void => {
  //   newNode.forEach((node) => {
  //     domNode.append(node);
  //   });
  // };

  createView() {
    new ElementCreator({ tag: 'div', className: ['menu__level'], textContent: 'Level 1 of 20' }).appendNodeToDom(
      document.querySelector('.menu__header')!,
    );
  }
  // appendNodeToDom(domNode: HTMLElement, newNode: HTMLElement) {}
}

export default Menu;
