// import image from '../../assets/icons/steering.png';
// const img = new Image();
// img.src = image;
import { dataExampleLayout } from '../data/dataExampleLayout';

class exampleLayout {
  addLayout() {
    // const myOwnTag = Object.create(HTMLElement.prototype);
    const myOwnTag = document.createElement('steering');

    // //Наведение
    // document.addEventListener('mouseover', (event) => {
    //   if (event.target instanceof HTMLElement) {
    //     const mapcart = event.target.closest('mapcart');
    //     if (mapcart) {
    //       mapcart.classList.add('shadow');
    //     }
    //   }
    // });
    // document.addEventListener('mouseout', (event) => {
    //   if (event.target instanceof HTMLElement) {
    //     const mapcart = event.target.closest('mapcart');
    //     if (mapcart) {
    //       mapcart.classList.remove('shadow');
    //     }
    //   }
    // });

    // document.addEventListener('mouseover', (event) => {
    //   if (event.target instanceof HTMLElement) {
    //     const skull = event.target.closest('skull');
    //     const mapcart = event.target.closest('mapcart');
    //     if (skull && mapcart) {
    //       skull.classList.add('shadow');
    //       mapcart.classList.remove('shadow');
    //     }
    //   }
    // });
    // document.addEventListener('mouseout', (event) => {
    //   if (event.target instanceof HTMLElement) {
    //     const skull = event.target.closest('skull');
    //     const mapcart = event.target.closest('mapcart');
    //     if (skull) {
    //       skull.classList.remove('shadow');
    //     }
    //   }
    // });
    // //
    //Наведение
    document.addEventListener('mouseover', (event) => {
      if (event.target instanceof HTMLElement) {
        const mapcart = event.target.closest('egg');
        if (mapcart) {
          mapcart.classList.add('hover');
        }
      }
    });
    document.addEventListener('mouseout', (event) => {
      if (event.target instanceof HTMLElement) {
        const mapcart = event.target.closest('egg');
        if (mapcart) {
          mapcart.classList.remove('hover');
        }
      }
    });

    const gameWrapper: HTMLDivElement | null = document.querySelector('.boat-surface');
    const boat: HTMLElement = document.createElement('div');
    boat.className = 'boat';
    // if (gameWrapper) {
    //   const test = `
    //     <img src="${image}" alt="steering" />
    //     <img src="${image}" alt="steering" />
    //   `;
    //   gameWrapper.innerHTML = '';
    //   boat.innerHTML = test;
    //   gameWrapper.append(boat);
    // }
    if (gameWrapper) {
      // const test = `
      //   <span></span>
      //   <span> <span>
      // `;
      gameWrapper.innerHTML = '';
      //     boat.innerHTML = `
      //     <span></span>
      //     ${myOwnTag}
      // `;

      // boat.innerHTML = `
      //     <span></span>
      //     ${myOwnTag}
      // `;

      // boat.innerHTML = `
      //     <steering></steering>
      //     <steering></steering>
      // `;

      boat.innerHTML = dataExampleLayout[1];

      let str = 'steering';

      // for (let i = 0; i < 3; i += 1) {
      //   boat.innerHTML += `
      //   <${str}></${str}>
      // `;
      // }

      // boat.append(myOwnTag);
      // boat.append(myOwnTag);

      gameWrapper.append(boat);
    }
  }
}
export default exampleLayout;
