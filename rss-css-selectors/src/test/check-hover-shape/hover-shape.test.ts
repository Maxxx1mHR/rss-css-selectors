import fs from 'fs';
import { fireEvent } from '@testing-library/dom';
import { dataGameLevels } from '../../modules/data/data-game-levels';
import BoatView from '../../modules/view/boat-view';

describe('render block boat', () => {
  it('check wheel hover', () => {
    document.body.innerHTML = fs.readFileSync('src/index.html').toString();

    const level = 0;
    +localStorage.setItem('currentCssSelectorLevel', String(0));
    new BoatView(dataGameLevels, level);
    expect(document.body).toMatchSnapshot();

    expect(document.querySelector('.wheel.hover')).toBeFalsy();
    expect(document.querySelector('.wheel')).toBeTruthy();

    const firstWheel = document.querySelector('.wheel');

    if (firstWheel) {
      fireEvent(firstWheel, new MouseEvent('mouseover', { bubbles: true, cancelable: true }));
    }

    expect(document.querySelector('.wheel.hover')).toBeTruthy();
  });
});
