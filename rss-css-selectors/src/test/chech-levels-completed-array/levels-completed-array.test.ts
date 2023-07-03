import fs from 'fs';
import { dataGameLevels } from '../../modules/data/data-game-levels';
import CssView from '../../modules/view/css-view';

describe('render block cssView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('src/index.html').toString();
    // const levelsCompleted = [1, 2, 3, 4, 5, 6, 7, 8];
    const level = 0;
    new CssView(dataGameLevels, level);
    expect(document.body).toMatchSnapshot();
    expect(document.querySelector('.modal.modal__active')).toBeFalsy();
    expect(document.querySelector('.modal')).toBeTruthy();
  });

  it('check win game. add congratulation modal', () => {
    // document.body.innerHTML = fs.readFileSync('src/index.html').toString();
    // const levelsCompleted = [1, 2, 3, 4, 5, 6, 7, 8];
    // const level = 0;
    // new CssView(dataGameLevels, level);
    // expect(document.body).toMatchSnapshot();
    const levelsCompleted = [1, 2, 3, 4, 5, 6, 7, 8];

    // expect(document.querySelector('.modal.modal__active')).toBeFalsy();
    // expect(document.querySelector('.modal')).toBeTruthy();

    levelsCompleted.push(9);
    if (levelsCompleted.length === dataGameLevels.length) {
      expect(document.querySelector('.modal.modal__active')).toBeTruthy();
    }
  });

  it('check count levels completed with and without help', () => {
    let levelsCompleted = 0;
    const levelsCompletedWithHelp = 5;
    const levelsCompletedWithoutHelp = 4;
    levelsCompleted = levelsCompletedWithHelp + levelsCompletedWithoutHelp;
    // document.body.innerHTML = fs.readFileSync('src/index.html').toString();
    // const levelsCompleted = [1, 2, 3, 4, 5, 6, 7, 8];
    // const level = 0;
    // new CssView(dataGameLevels, level);
    // expect(document.body).toMatchSnapshot();

    // expect(document.querySelector('.modal.modal__active')).toBeFalsy();
    // expect(document.querySelector('.modal')).toBeTruthy();

    // levelsCompleted.push(9);
    if (levelsCompleted === dataGameLevels.length) {
      expect(document.querySelector('.modal.modal__active')).toBeTruthy();
    }
  });
});
