import fs from 'fs';
import { fireEvent } from '@testing-library/dom';
import { dataGameLevels } from '../../modules/data/data-game-levels';
import MenuView from '../../modules/view/menu-view';

describe('render block menu', () => {
  it('check open menu click', () => {
    document.body.innerHTML = fs.readFileSync('src/index.html').toString();

    const level = 0;
    new MenuView(dataGameLevels, level);
    expect(document.body).toMatchSnapshot();

    expect(document.querySelector('.menu.active')).toBeFalsy();
    expect(document.querySelector('.menu')).toBeTruthy();
    expect(document.querySelector('.settings__open')).toBeTruthy();

    const setting = document.querySelector('.settings__open');
    if (setting) {
      fireEvent(setting, new MouseEvent('click', { bubbles: true, cancelable: true }));
    }
    expect(document.querySelector('.menu.active')).toBeTruthy();
  });
});
