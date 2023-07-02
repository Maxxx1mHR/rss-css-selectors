import { dataGameLevels } from '../../modules/data/data-game-levels';
import HtmlView from '../../modules/view/html-view';

describe('render block boat for each level', () => {
  const countLevel = dataGameLevels.length;
  for (let i = 0; i < countLevel; i++) {
    it(`renders level ${i} correctly`, () => {
      const htmlView = new HtmlView(dataGameLevels, i);
      const html = htmlView.createView(dataGameLevels, i);
      expect(html).toMatchSnapshot();
    });
  }
});
