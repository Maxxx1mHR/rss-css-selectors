// import image from '../../assets/icons/steering.png';
// const img = new Image();
// img.src = image;
import { dataExampleLayout } from '../data/dataExampleLayout';
import { IDataLevel } from '../types';
// import { IData } from '../types';
import shapesEventListner from './shapesEventListner';

class exampleLayout {
  addLayout(data: IDataLevel[], level: number) {
    const hoverEffect = new shapesEventListner();
    hoverEffect.addHoverEffects();
    const gameWrapper: HTMLDivElement | null = document.querySelector('.boat-surface');
    const boat: HTMLElement = document.createElement('div');
    boat.className = 'boat';

    if (gameWrapper) {
      gameWrapper.innerHTML = '';
      // boat.innerHTML = dataExampleLayout[1];
      // boat.innerHTML = dataLevels[0].exampleLayout;
      // boat.innerHTML = data[level];
      // boat.innerHTML = data[level];
      // console.log(data[level].dataExampleLayout);
      boat.innerHTML = data[level].dataExampleLayout;

      gameWrapper.append(boat);
    }
  }
}
export default exampleLayout;
