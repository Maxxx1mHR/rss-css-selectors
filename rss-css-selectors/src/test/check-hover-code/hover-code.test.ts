import fs from 'fs'; // node js встроенный интерфейс, чтобы загрузить контент твоего файла HTML
import { fireEvent } from '@testing-library/dom'; // установил либу @testing-library/user-event, чтобы симулировать действия
import { dataGameLevels } from '../../modules/data/data-game-levels'; // беру твои исходные уровни, чтобы загенерить лодку
import HtmlView from '../../modules/view/html-view'; // беру твой модуль для создания лодки

describe('render block boat for each level', () => {
  it('check wheel hover', () => {
    document.body.innerHTML = fs.readFileSync('src/index.html').toString(); // хватаю твой хтмл файл и пихаю в бади

    const level = 0;
    new HtmlView(dataGameLevels, level); // выполняю отрисовку лодки
    expect(document.body).toMatchSnapshot(); // чекаю отрисовку. в файле снэпшота сможешь увидеть появившиеся дивы с классами .wheel, которых нет в исходном html, значит new BoatView отработал корректно

    expect(document.querySelector('.code.lighting-code')).toBeFalsy(); //проверяю без ховера, что класса hover нет
    expect(document.querySelector('.code')).toBeTruthy(); // но элемент с wheel долженбыть

    const code = document.querySelector('.code'); // получаю эту ноду

    if (code) {
      // проверка просто для TypeScript
      fireEvent(code, new MouseEvent('mouseover', { bubbles: true, cancelable: true })); // имитирую ховер
    }

    expect(document.querySelector('.code.lighting-code')).toBeTruthy(); // ожидаю, что теперь у нас есть элемент с .hover классом, ведь мы навели мышь
  });
});
