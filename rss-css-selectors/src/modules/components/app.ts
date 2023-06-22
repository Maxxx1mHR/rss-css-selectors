import { IDataLevel } from '../types/types';
import BoatView from '../view/boat-view';
import MenuView from '../view/menu-view';
import HtmlView from '../view/html-view';

class App {
  constructor(data: IDataLevel[], level: number) {
    const boat = new BoatView(data, level);
    // console.log(boat.getHtmlElement());
    new HtmlView(data, level);
    new MenuView(data, level);
  }

  start() {}
}

export default App;
