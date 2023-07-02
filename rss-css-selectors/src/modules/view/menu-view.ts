import left from '../../assets/icons/interaction/left.svg';
import reset from '../../assets/icons/interaction/reset.png';
import settingIcon from '../../assets/icons/interaction/settings.png';
import closeIcon from '../../assets/icons/pirot/shapes/skull.png';
const img = new Image();

import { IDataLevel } from '../types/types';
import ElementCreator from '../components/element-creator';
import App from '../components/app';
import { dataGameLevels } from '../data/data-game-levels';

class MenuView {
  constructor(data: IDataLevel[], level: number) {
    this.createView(data, level);
    this.switchLevel(data, level);
    this.levelMenuSwith();
    this.openSettings();
    this.closeSetting();
    this.resetProgress();
    this.closeModal();
  }
  private openSettings(): void {
    const hamburger = document.querySelector('.settings__open');
    hamburger?.addEventListener('click', () => {
      document.querySelector('.menu')?.classList.add('active');
    });
  }
  private closeSetting(): void {
    const close = document.querySelector('.close');
    close?.addEventListener('click', () => {
      document.querySelector('.menu')?.classList.remove('active');
    });
  }

  private resetProgress(): void {
    const close = document.querySelector('.menu__reset');
    close?.addEventListener('click', () => {
      localStorage.removeItem('currentCssSelectorLevel');
      localStorage.removeItem('levelsWithUseHelp');
      localStorage.removeItem('completedLevels');
      new App(dataGameLevels, 0);
    });
  }

  private closeModal(): void {
    const modalButton = document.querySelector('.modal__button');
    modalButton?.addEventListener('click', () => {
      document.querySelector('.modal')?.classList.remove('modal__active');
    });
  }

  private levelMenuSwith(): void {
    const levels = document.querySelectorAll('.menu__levels-item');
    levels.forEach((level) => {
      level.addEventListener('click', (event) => {
        if (event.target instanceof HTMLElement) {
          if (event.target.closest('.menu__levels-item')) {
            document.querySelector('.menu')?.classList.remove('active');
            this.setCurrentLevelGame(+event.target.id - 1);
            new App(dataGameLevels, +event.target.id - 1);
            this.switchCurrentLevel(+event.target.id - 1);
          }
        }
      });
    });
  }

  private switchLevel(data: IDataLevel[], level: number): void {
    const menuLevelSwitch = document.querySelector('.menu__level-switch');
    document.querySelectorAll('.menu__levels-item')[level].classList.add('menu__current-level');
    if (menuLevelSwitch) {
      menuLevelSwitch.addEventListener('click', (event) => {
        if (event.target instanceof HTMLElement) {
          const prevButton = event.target.closest('.menu__prev');
          const nextButton = event.target.closest('.menu__next');
          if (prevButton) {
            level -= 1;
            if (level < 0) {
              level = 0;
            }
            this.setCurrentLevelGame(level);

            new App(data, level);
            this.switchCurrentLevel(level);
          }
          if (nextButton) {
            level += 1;
            if (level > data.length - 1) {
              level = data.length - 1;
            }
            this.setCurrentLevelGame(level);

            new App(data, level);
            this.switchCurrentLevel(level);
          }
        }
      });
    }
  }

  private switchCurrentLevel(level: number): void {
    const menuLevelItem = document.querySelectorAll('.menu__levels-item');

    menuLevelItem.forEach((item) => {
      item.classList.remove('menu__current-level');
      menuLevelItem[level].classList.add('menu__current-level');
    });
  }

  private setCurrentLevelGame<T>(level: T): void {
    localStorage.setItem('currentCssSelectorLevel', String(level));
  }

  private createView(data: IDataLevel[], level: number): void {
    const menuHeader: HTMLElement | null = document.querySelector('.menu__header');
    const menuDescription: HTMLElement | null = document.querySelector('.menu__description');
    const menuExample: HTMLElement | null = document.querySelector('.menu__example');
    const menuLevelsList: HTMLElement | null = document.querySelector('.menu__levels-list');
    const menuWrapper: HTMLElement | null = document.querySelector('.menu__wrapper');
    const settings: HTMLElement | null = document.querySelector('.settings');
    const menuClose: HTMLElement | null = document.querySelector('.menu__close');

    [menuHeader, menuDescription, menuExample, menuLevelsList, menuWrapper, settings, menuClose].forEach((element) => {
      if (element) element.innerHTML = '';
    });

    const hamburger = new ElementCreator({
      tag: 'img',
      className: ['settings__open'],
      src: (img.src = settingIcon),
      alt: 'settings',
    });

    if (settings) {
      hamburger.appendNodeToDom(settings);
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
      src: (img.src = left),
      alt: 'left',
    });

    if (menuLevelSwitch) {
      menuPrev.appendNodeToDom(menuLevelSwitch.getElement());
    }

    const menuNext = new ElementCreator({
      tag: 'img',
      className: ['menu__next'],
      src: (img.src = left),
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

    const close = new ElementCreator({
      tag: 'img',
      className: ['close'],
      src: (img.src = closeIcon),
      alt: 'close',
    });

    if (menuClose) {
      close.appendNodeToDom(menuClose);
    }
    const menuLevelsTitle = new ElementCreator({
      tag: 'div',
      className: ['menu__levels-title'],
      textContent: 'Chose the level',
    });

    const menuReset = new ElementCreator({
      tag: 'img',
      className: ['menu__reset'],
      src: (img.src = reset),
      alt: 'reset',
    });

    if (menuWrapper) {
      menuLevelsTitle.appendNodeToDom(menuWrapper);
      menuReset.appendNodeToDom(menuWrapper);
    }

    for (let i = 0; i < data.length; i += 1) {
      const menuLevelsItem = new ElementCreator({
        tag: 'li',
        className: ['menu__levels-item'],
        textContent: `Level ${data[i].level} - ${data[i].taskName}`,
        id: `${data[i].level}`,
      });
      if (menuLevelsList) {
        menuLevelsItem.appendNodeToDom(menuLevelsList);
      }
    }
    const levelsHelp = JSON.parse(localStorage.getItem('levelsWithUseHelp') || '[]');
    for (let i = 0; i < levelsHelp.length; i++) {
      document.querySelectorAll('.menu__levels-item')[levelsHelp[i]].classList.add('with_help');
    }
    const levelsComplete = JSON.parse(localStorage.getItem('completedLevels') || '[]');
    for (let i = 0; i < levelsComplete.length; i++) {
      document.querySelectorAll('.menu__levels-item')[levelsComplete[i]].classList.add('check_done');
    }
  }
}

export default MenuView;
