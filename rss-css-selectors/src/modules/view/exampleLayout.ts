// import image from '../../assets/icons/steering.png';
// const img = new Image();
// img.src = image;
import { dataExampleLayout } from '../data/dataExampleLayout';
import shapesEventListner from './shapesEventListner';

class exampleLayout {
  addLayout() {
    const hoverEffect = new shapesEventListner();
    hoverEffect.addHoverEffects();
    const gameWrapper: HTMLDivElement | null = document.querySelector('.boat-surface');
    const boat: HTMLElement = document.createElement('div');
    boat.className = 'boat';

    if (gameWrapper) {
      gameWrapper.innerHTML = '';
      boat.innerHTML = dataExampleLayout[1];

      gameWrapper.append(boat);
    }
  }
}
export default exampleLayout;
