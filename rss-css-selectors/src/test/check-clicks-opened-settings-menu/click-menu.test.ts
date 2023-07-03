import fs from 'fs'; // node js встроенный интерфейс, чтобы загрузить контент твоего файла HTML
import { fireEvent } from '@testing-library/dom'; // установил либу @testing-library/user-event, чтобы симулировать действия
import { dataGameLevels } from '../../modules/data/data-game-levels'; // беру твои исходные уровни, чтобы загенерить лодку
import MenuView from '../../modules/view/menu-view'; // беру твой модуль для создания лодки

describe('render block menu', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('src/index.html').toString(); // хватаю твой хтмл файл и пихаю в бади
    const level = 0;
    new MenuView(dataGameLevels, level); // выполняю отрисовку меню
    expect(document.body).toMatchSnapshot(); // чекаю отрисовку. в файле снэпшота появились элементы меню, которых нет в исходном html, значит new MenuView отработал корректно
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
