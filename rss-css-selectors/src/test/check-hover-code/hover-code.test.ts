import fs from 'fs';
import { fireEvent } from '@testing-library/dom';
import { dataGameLevels } from '../../modules/data/data-game-levels';
import HtmlView from '../../modules/view/html-view';

describe('render block html view', () => {
  it('check code hover', () => {
    document.body.innerHTML = fs.readFileSync('src/index.html').toString();

    const level = 0;
    new HtmlView(dataGameLevels, level);
    expect(document.body).toMatchSnapshot();

    expect(document.querySelector('.code.lighting-code')).toBeFalsy();
    expect(document.querySelector('.code')).toBeTruthy();

    const code = document.querySelector('.code');
    if (code) {
      fireEvent(code, new MouseEvent('mouseover', { bubbles: true, cancelable: true }));
    }

    expect(document.querySelector('.code.lighting-code')).toBeTruthy();
  });
});
