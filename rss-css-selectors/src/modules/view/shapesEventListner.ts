class shapesEventListner {
  addHoverEffects() {
    document.addEventListener('mouseover', (event) => {
      if (event.target instanceof HTMLElement) {
        const round = event.target.closest('.round');
        const code = event.target.closest('.code');
        const id = event.target.dataset.id;
        if (round) {
          round.classList.add('hover');
          console.log(id);
          document.querySelector(`.code[data-id='${id}']`)?.classList.add('test');
        }
        if (code) {
          console.log('test');
          code.classList.add('test');
          document.querySelector(`.round[data-id='${id}']`)?.classList.add('hover', 'round_lighting-tag');
        }
      }
    });

    document.addEventListener('mouseout', (event) => {
      if (event.target instanceof HTMLElement) {
        const round = event.target.closest('.round');
        const code = event.target.closest('.code');
        const id = event.target.dataset.id;

        if (round) {
          round.classList.remove('hover');
          document.querySelector(`.code[data-id='${id}']`)?.classList.remove('test');
        }
        if (code) {
          console.log('test');
          code.classList.remove('test');
          document.querySelector(`.round[data-id='${id}']`)?.classList.remove('hover', 'round_lighting-tag');
        }
      }
    });

    // document.addEventListener('mouseover', (event) => {
    //   if (event.target instanceof HTMLElement) {
    //     const square = event.target.closest('square');
    //     if (square) {
    //       square.classList.add('hover');
    //     }
    //   }
    // });

    // document.addEventListener('mouseout', (event) => {
    //   if (event.target instanceof HTMLElement) {
    //     const square = event.target.closest('square');
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
