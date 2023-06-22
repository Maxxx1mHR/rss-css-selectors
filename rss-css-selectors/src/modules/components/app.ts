import { IDataLevel } from '../types/types';
import BoatView from '../view/boat-view';
import MenuView from '../view/menu-view';
import HtmlView from '../view/html-view';

class App {
  constructor(data: IDataLevel[], level: number) {
    new BoatView(data, level);
    new HtmlView(data, level);
    new MenuView(data, level);
  }
}

export default App;
