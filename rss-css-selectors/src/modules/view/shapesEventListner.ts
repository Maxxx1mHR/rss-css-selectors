class shapesEventListner {
  addHoverEffects() {
    // События наведения на кружки
    document.addEventListener('mouseover', (event) => {
      if (event.target instanceof HTMLElement) {
        const round = event.target.closest('.round');
        const code = event.target.closest('.code');
        const square = event.target.closest('.square');
        const shape = event.target.closest('.shape');
        const point = event.target.closest('.point');
        const id = event.target.dataset.id;
        // if (round) {
        //   round.classList.add('hover');
        //   document.querySelector(`.code[data-id='${id}']`)?.classList.add('lighting-code');
        // }
        // if (square) {
        //   square.classList.add('hover');
        //   document.querySelector(`.code[data-id='${id}']`)?.classList.add('lighting-code');
        // }
        if (shape) {
          shape.classList.add('hover');
          document.querySelector(`.shape[data-id='${id}']`)?.classList.add('lighting-code', 'lighting-tag');
          document.querySelector(`.code[data-id='${id}']`)?.classList.add('lighting-code');
        }
        if (code) {
          code.classList.add('lighting-code');
          document.querySelector(`.shape[data-id='${id}']`)?.classList.add('hover', 'lighting-tag');
          // document.querySelector(`.round[data-id='${id}']`)?.classList.add('hover', 'lighting-tag');
          // document.querySelector(`.square[data-id='${id}']`)?.classList.add('hover', 'lighting-tag');
        }
        if (point) {
          // document.querySelector(`.shape[data-id='${id}']`)?.classList.remove('lighting-code');
          // document.querySelector(`.shape[data-id='${id}']`)?.classList.remove('hover', 'lighting-tag', 'lighting-code');
          // document.querySelector(`.point[data-id='${id}']`)?.classList.add('hover', 'lighting-tag');
        }
      }
    });

    document.addEventListener('mouseout', (event) => {
      if (event.target instanceof HTMLElement) {
        const round = event.target.closest('.round');
        const code = event.target.closest('.code');
        const square = event.target.closest('.square');
        const shape = event.target.closest('.shape');
        const id = event.target.dataset.id;
        if (shape) {
          shape.classList.remove('hover');
          document.querySelector(`.shape[data-id='${id}']`)?.classList.remove('hover', 'lighting-code', 'lighting-tag');
          document.querySelector(`.code[data-id='${id}']`)?.classList.remove('lighting-code');
        }
        // if (round) {
        //   round.classList.remove('hover');
        //   document.querySelector(`.code[data-id='${id}']`)?.classList.remove('lighting-code');
        // }
        // if (square) {
        //   square.classList.remove('hover');
        //   document.querySelector(`.code[data-id='${id}']`)?.classList.remove('lighting-code');
        // }
        if (code) {
          code.classList.remove('lighting-code');
          document.querySelector(`.shape[data-id='${id}']`)?.classList.remove('hover', 'lighting-tag');
          // code.classList.remove('lighting-code');
          // document.querySelector(`.round[data-id='${id}']`)?.classList.remove('hover', 'lighting-tag');
          // document.querySelector(`.square[data-id='${id}']`)?.classList.remove('hover', 'lighting-tag');
        }
      }
    });

    // События наведения на квадраты
    // document.addEventListener('mouseover', (event) => {
    //   if (event.target instanceof HTMLElement) {
    //     const square = event.target.closest('.square');
    //     const code = event.target.closest('.code');
    //     const id = event.target.dataset.id;
    //     if (square) {
    //       square.classList.add('hover');
    //     }
    //   }
    // });

    // document.addEventListener('mouseout', (event) => {
    //   if (event.target instanceof HTMLElement) {
    //     const square = event.target.closest('.square');
    //     if (square) {
    //       square.classList.remove('hover');
    //     }
    //   }
    // });

    // document.addEventListener('mouseover', (event) => {
    //   if (event.target instanceof HTMLElement) {
    //     const point = event.target.closest('point');
    //     const round = event.target.closest('round');
    //     if (point && round) {
    //       point.classList.add('hover-dark');
    //       round.classList.remove('hover');
    //     }
    //     if (point) {
    //       point.classList.add('hover-dark');
    //     }
    //   }
    // });

    // document.addEventListener('mouseout', (event) => {
    //   if (event.target instanceof HTMLElement) {
    //     const point = event.target.closest('point');
    //     if (point) {
    //       point.classList.remove('hover-dark');
    //     }
    //   }
    // });

    // document.addEventListener('mouseover', (event) => {
    //   if (event.target instanceof HTMLElement) {
    //     const blue = event.target.closest('blue');
    //     const square = event.target.closest('square');
    //     if (blue && square) {
    //       blue.classList.add('hover-dark');
    //       square.classList.remove('hover');
    //     }
    //   }
    // });

    // document.addEventListener('mouseout', (event) => {
    //   if (event.target instanceof HTMLElement) {
    //     const blue = event.target.closest('blue');
    //     if (blue) {
    //       blue.classList.remove('hover-dark');
    //     }
    //   }
    // });

    // document.addEventListener('mouseover', (event) => {
    //   if (event.target instanceof HTMLElement) {
    //     const rectangle = event.target.closest('rectangle');
    //     const round = event.target.closest('round');
    //     if (rectangle && round) {
    //       rectangle.classList.add('hover-dark');
    //       round.classList.remove('hover');
    //     }
    //   }
    // });

    // document.addEventListener('mouseout', (event) => {
    //   if (event.target instanceof HTMLElement) {
    //     const blue = event.target.closest('rectangle');
    //     if (blue) {
    //       blue.classList.remove('hover-dark');
    //     }
    //   }
    // });
  }
}

export default shapesEventListner;
