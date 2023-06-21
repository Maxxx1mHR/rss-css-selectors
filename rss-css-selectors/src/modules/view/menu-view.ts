import { IDataLevel } from '../types/types';
import ElementCreator from '../components/element-creator';

class MenuView {
  constructor(data: IDataLevel[], level: number) {
    this.createView(data, level);
  }
  addEventListner() {
    document.addEventListener('click', (event) => {
      if (event.target instanceof HTMLElement) {
        if (event.target.closest('.hamburger')) {
          document.querySelector('.menu')?.classList.add('active');
        }
        if (event.target.closest('.menu__close')) {
          document.querySelector('.menu')?.classList.remove('active');
        }
      }
    });
  }

  createView(data: IDataLevel[], level: number) {
    new ElementCreator({
      tag: 'div',
      className: ['menu__level'],
      textContent: `Level ${data[level].level} of ${data.length}`,
    }).prependNodeToDom(document.querySelector('.menu__header')!);
    new ElementCreator({
      tag: 'div',
      className: ['menu__description-title'],
      textContent: data[level].taskName,
    }).appendNodeToDom(document.querySelector('.menu__description')!);

    new ElementCreator({
      tag: 'div',
      className: ['menu__description-task'],
      textContent: data[level].taskDescription,
    }).appendNodeToDom(document.querySelector('.menu__description')!);

    new ElementCreator({
      tag: 'div',
      className: ['menu__description-attribute'],
      textContent: data[level].attribute,
    }).appendNodeToDom(document.querySelector('.menu__description')!);

    new ElementCreator({
      tag: 'div',
      className: ['menu__description-correction'],
      textContent: data[level].correction,
    }).appendNodeToDom(document.querySelector('.menu__description')!);

    new ElementCreator({
      tag: 'div',
      className: ['menu__example-solution'],
      textContent: data[level].example,
    }).appendNodeToDom(document.querySelector('.menu__example')!);

    for (let i = 0; i < data.length; i += 1) {
      new ElementCreator({
        tag: 'li',
        className: ['menu__levels-item'],
        textContent: `Level ${data[i].level} - ${data[i].taskName}`,
      }).appendNodeToDom(document.querySelector('.menu__levels-list')!);
    }
  }
}

export default MenuView;
