// import { dataGameLevels } from '../../modules/data/data-game-levels';
// import CssView from '../../modules/view/css-view';

// describe('render block css', () => {
//   const level = 0;
//   it('renders correctly', () => {
//     const cssView = new CssView(dataGameLevels, level);
//     const css = cssView.createView();
//     expect(css).toMatchSnapshot();
//   });
// });

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
