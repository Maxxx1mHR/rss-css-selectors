import fs from 'fs';
import { fireEvent } from '@testing-library/dom';
import { dataGameLevels } from '../../modules/data/data-game-levels';
import MenuView from '../../modules/view/menu-view';

describe('render block menu', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('src/index.html').toString();
    const level = 0;
    new MenuView(dataGameLevels, level);
    expect(document.body).toMatchSnapshot();
    const setting = document.querySelector('.settings__open');
    if (setting) {
      fireEvent(setting, new MouseEvent('click', { bubbles: true, cancelable: true }));
    }
    expect(document.querySelector('.menu.active')).toBeTruthy();
  });

  it('check close menu click', () => {
    expect(document.querySelector('.menu.active')).toBeTruthy();
    expect(document.querySelector('.close')).toBeTruthy();
    const close = document.querySelector('.close');
    if (close) {
      fireEvent(close, new MouseEvent('click', { bubbles: true, cancelable: true }));
    }
    expect(document.querySelector('.menu.active')).toBeFalsy;
    expect(document.querySelector('.menu')).toBeTruthy;
  });

  it('check click by levels list', () => {
    const levelsTwo = document.querySelector('[id="2"]');
    expect(document.querySelector('[id="1"].menu__current-level')).toBeTruthy;
    if (levelsTwo) {
      fireEvent(levelsTwo, new MouseEvent('click', { bubbles: true, cancelable: true }));
    }
    expect(document.querySelector('[id="1"].menu__current-level')).toBeFalsy;
    expect(document.querySelector('[id="1"]')).toBeTruthy;
    expect(document.querySelector('[id="2"].menu__current-level')).toBeTruthy;
  });
});
