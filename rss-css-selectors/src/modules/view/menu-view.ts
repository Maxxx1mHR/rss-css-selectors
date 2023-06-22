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
  private addEventListner(): void {
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

  private createView(data: IDataLevel[], level: number): void {
    const menuHeader: HTMLElement | null = document.querySelector('.menu__header');
    const menuDescription: HTMLElement | null = document.querySelector('.menu__description');
    const menuExample: HTMLElement | null = document.querySelector('.menu__example');
    const menuLevelsList: HTMLElement | null = document.querySelector('.menu__levels-list');

    if (menuHeader) {
      menuHeader.innerHTML = '';
    }
    if (menuDescription) {
      menuDescription.innerHTML = '';
    }
    if (menuExample) {
      menuExample.innerHTML = '';
    }
    if (menuLevelsList) {
      menuLevelsList.innerHTML = '';
    }

    const menuLevel = new ElementCreator({
      tag: 'div',
      className: ['menu__level'],
      textContent: `Level ${data[level].level} of ${data.length}`,
    });

    if (menuHeader) {
      menuLevel.appendNodeToDom(menuHeader);
    }

    const menuLevelSwitch = new ElementCreator({
      tag: 'div',
      className: ['menu__level-switch'],
    });

    if (menuHeader) {
      menuLevelSwitch.appendNodeToDom(menuHeader);
    }

    const menuPrev = new ElementCreator({
      tag: 'img',
      className: ['menu__prev'],
      src: img.src,
      alt: 'left',
    });

    if (menuLevelSwitch) {
      menuPrev.appendNodeToDom(menuLevelSwitch.getElement());
    }

    const menuNext = new ElementCreator({
      tag: 'img',
      className: ['menu__next'],
      src: img.src,
      alt: 'right',
    });

    if (menuLevelSwitch) {
      menuNext.appendNodeToDom(menuLevelSwitch.getElement());
    }

    const menuDescriptionTitle = new ElementCreator({
      tag: 'div',
      className: ['menu__description-title'],
      textContent: data[level].taskName,
    });

    if (menuDescription) {
      menuDescriptionTitle.appendNodeToDom(menuDescription);
    }

    const menuDescriptionTask = new ElementCreator({
      tag: 'div',
      className: ['menu__description-task'],
      textContent: data[level].taskDescription,
    });

    if (menuDescription) {
      menuDescriptionTask.appendNodeToDom(menuDescription);
    }

    const menuDescriptionAttribute = new ElementCreator({
      tag: 'div',
      className: ['menu__description-attribute'],
      textContent: data[level].attribute,
    });
    if (menuDescription) {
      menuDescriptionAttribute.appendNodeToDom(menuDescription);
    }

    const menuDescriptionCorrection = new ElementCreator({
      tag: 'div',
      className: ['menu__description-correction'],
      textContent: data[level].correction,
    });

    if (menuDescription) {
      menuDescriptionCorrection.appendNodeToDom(menuDescription);
    }

    const menuExampleTitle = new ElementCreator({
      tag: 'div',
      className: ['menu__example-title'],
      textContent: 'Example',
    });

    if (menuExample) {
      menuExampleTitle.appendNodeToDom(menuExample);
    }

    const menuExampleSolution = new ElementCreator({
      tag: 'div',
      className: ['menu__example-solution'],
      textContent: data[level].example,
    });

    if (menuExample) {
      menuExampleSolution.appendNodeToDom(menuExample);
    }

    for (let i = 0; i < data.length; i += 1) {
      const menuLevelsItem = new ElementCreator({
        tag: 'li',
        className: ['menu__levels-item'],
        textContent: `Level ${data[i].level} - ${data[i].taskName}`,
      });
      if (menuLevelsList) {
        menuLevelsItem.appendNodeToDom(menuLevelsList);
      }
    }
  }
}

export default MenuView;
