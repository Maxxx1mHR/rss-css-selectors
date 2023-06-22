// import { INews } from '../../../types/index';
import placeholder from '../../assets/icons/left.svg';
const img = new Image();
img.src = placeholder;

import { IDataLevel } from '../types/types';
import ElementCreator from '../components/element-creator';

class MenuView {
  constructor(data: IDataLevel[], level: number) {
    this.createView(data, level);
    this.addEventListner();
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
    document.querySelector('.menu__header')!.innerHTML = '';
    document.querySelector('.menu__description')!.innerHTML = '';
    document.querySelector('.menu__example')!.innerHTML = '';
    document.querySelector('.menu__levels-list')!.innerHTML = '';

    new ElementCreator({
      tag: 'div',
      className: ['menu__level'],
      textContent: `Level ${data[level].level} of ${data.length}`,
    }).appendNodeToDom(document.querySelector('.menu__header')!);

    new ElementCreator({
      tag: 'div',
      className: ['menu__level-switch'],
    }).appendNodeToDom(document.querySelector('.menu__header')!);

    new ElementCreator({
      tag: 'img',
      className: ['menu__prev'],
      src: img.src,
      alt: 'left',
    }).appendNodeToDom(document.querySelector('.menu__level-switch')!);

    new ElementCreator({
      tag: 'img',
      className: ['menu__next'],
      src: img.src,
      alt: 'right',
    }).appendNodeToDom(document.querySelector('.menu__level-switch')!);

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
      className: ['menu__example-title'],
      textContent: 'Example',
    }).appendNodeToDom(document.querySelector('.menu__example')!);

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
