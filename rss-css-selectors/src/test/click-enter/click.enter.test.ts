import fs from 'fs';
import { fireEvent } from '@testing-library/dom';
import { dataGameLevels } from '../../modules/data/data-game-levels';
import CssView from '../../modules/view/css-view';
import BoatView from '../../modules/view/boat-view';

describe('render block boat and css editor', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('src/index.html').toString();
    const level = 0;
    new CssView(dataGameLevels, level);
    new BoatView(dataGameLevels, level);
    expect(document.body).toMatchSnapshot();
  });

  it('check selector from input right', () => {
    expect(document.querySelector('.wheel.animation-drop')).toBeFalsy();
    expect(document.querySelector('.wheel')).toBeTruthy();

    function nodeListsAreEqual(list1: NodeList, list2: NodeList): boolean {
      if (list1.length !== list2.length) {
        return false;
      }
      return Array.from(list1).every((node, index) => node === list2[index]);
    }

    const enterButton = document.querySelector('.editor__button');
    if (enterButton) {
      fireEvent(enterButton, new MouseEvent('click', { bubbles: true, cancelable: true }));
    }

    const boat = document.querySelector('.boat');
    const cssSelector = boat?.querySelectorAll('wheel');
    const dataSelector = boat?.querySelectorAll(dataGameLevels[0].correctSeletor);
    if (cssSelector && dataSelector) {
      if (nodeListsAreEqual(cssSelector, dataSelector)) {
        boat?.querySelector('.wheel')?.classList.add('animation-drop');
      }
    }
    expect(boat?.querySelector('.wheel.animation-drop')).toBeTruthy();
  });
  it('check click enter. selector from input wrong', () => {
    expect(document.querySelector('.editor.animation-shake')).toBeFalsy();
    expect(document.querySelector('.editor')).toBeTruthy();

    function nodeListsAreEqual(list1: NodeList, list2: NodeList): boolean {
      if (list1.length !== list2.length) {
        return false;
      }
      return Array.from(list1).every((node, index) => node === list2[index]);
    }

    const enterButton = document.querySelector('.editor__button');
    if (enterButton) {
      fireEvent(enterButton, new MouseEvent('click', { bubbles: true, cancelable: true }));
    }

    const editor = document.querySelector('.editor');
    const boat = document.querySelector('.boat');
    const cssSelector = boat?.querySelectorAll('wheelTest');
    const dataSelector = boat?.querySelectorAll(dataGameLevels[0].correctSeletor);
    if (cssSelector && dataSelector) {
      if (!nodeListsAreEqual(cssSelector, dataSelector)) {
        editor?.classList.add('animation-shake');
      }
    }
    expect(document.querySelector('.editor.animation-shake')).toBeTruthy();
  });

  it('check press enter. selector from input wrong', () => {
    expect(document.querySelector('.editor.animation-shake')).toBeFalsy();
    expect(document.querySelector('.editor')).toBeTruthy();

    function nodeListsAreEqual(list1: NodeList, list2: NodeList): boolean {
      if (list1.length !== list2.length) {
        return false;
      }
      return Array.from(list1).every((node, index) => node === list2[index]);
    }

    const enterButton = document.querySelector('.editor__button');
    if (enterButton) {
      fireEvent.keyDown(enterButton, { key: 'Enter' });
    }

    const editor = document.querySelector('.editor');
    const boat = document.querySelector('.boat');
    const cssSelector = boat?.querySelectorAll('wheelTest');
    const dataSelector = boat?.querySelectorAll(dataGameLevels[0].correctSeletor);
    if (cssSelector && dataSelector) {
      if (!nodeListsAreEqual(cssSelector, dataSelector)) {
        editor?.classList.add('animation-shake');
      }
    }
    expect(document.querySelector('.editor.animation-shake')).toBeTruthy();
  });
});
