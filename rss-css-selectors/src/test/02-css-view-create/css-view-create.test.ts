import { dataGameLevels } from '../../modules/data/data-game-levels';
import CssView from '../../modules/view/css-view';

describe('render block css', () => {
  const level = 0;
  it('renders correctly', () => {
    const cssView = new CssView(dataGameLevels, level);
    const css = cssView.createView();
    expect(css).toMatchSnapshot();
  });
});
