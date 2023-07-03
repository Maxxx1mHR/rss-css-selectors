import fs from 'fs'; // node js встроенный интерфейс, чтобы загрузить контент твоего файла HTML
import { fireEvent } from '@testing-library/dom'; // установил либу @testing-library/user-event, чтобы симулировать действия
import { dataGameLevels } from '../../modules/data/data-game-levels'; // беру твои исходные уровни, чтобы загенерить лодку
import BoatView from '../../modules/view/boat-view'; // беру твой модуль для создания лодки

describe('render block boat for each level', () => {
  it('check wheel hover', () => {
    document.body.innerHTML = fs.readFileSync('src/index.html').toString(); // хватаю твой хтмл файл и пихаю в бади

    const level = 0;
    +localStorage.setItem('currentCssSelectorLevel', String(0)); // симулирую твой index.ts
    new BoatView(dataGameLevels, level); // выполняю отрисовку лодки
    expect(document.body).toMatchSnapshot(); // чекаю отрисовку. в файле снэпшота сможешь увидеть появившиеся дивы с классами .wheel, которых нет в исходном html, значит new BoatView отработал корректно

    expect(document.querySelector('.wheel.hover')).toBeFalsy(); //проверяю без ховера, что класса hover нет
    expect(document.querySelector('.wheel')).toBeTruthy(); // но элемент с wheel долженбыть

    const firstWheel = document.querySelector('.wheel'); // получаю эту ноду

    if (firstWheel) {
      // проверка просто для TypeScript
      fireEvent(firstWheel, new MouseEvent('mouseover', { bubbles: true, cancelable: true })); // имитирую ховер
    }

    expect(document.querySelector('.wheel.hover')).toBeTruthy(); // ожидаю, что теперь у нас есть элемент с .hover классом, ведь мы навели мышь
  });
});
