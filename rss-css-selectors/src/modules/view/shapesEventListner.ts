// class shapesEventListner {
//   addHoverEffects() {
//     document.addEventListener('mouseover', (event) => {
//       if (event.target instanceof HTMLElement) {
//         const code = event.target.closest('.code');
//         const shape = event.target.closest('.shape');
//         const id = event.target.dataset.id;
//         if (shape) {
//           shape.classList.add('hover');
//           document.querySelector(`.shape[data-id='${id}']`)?.classList.add('lighting-code', 'lighting-tag');
//           document.querySelector(`.code[data-id='${id}']`)?.classList.add('lighting-code');
//         }
//         if (code) {
//           code.classList.add('lighting-code');
//           document.querySelector(`.shape[data-id='${id}']`)?.classList.add('hover', 'lighting-tag');
//         }
//       }
//     });

//     document.addEventListener('mouseout', (event) => {
//       if (event.target instanceof HTMLElement) {
//         const code = event.target.closest('.code');
//         const shape = event.target.closest('.shape');
//         const id = event.target.dataset.id;
//         if (shape) {
//           shape.classList.remove('hover');
//           document.querySelector(`.shape[data-id='${id}']`)?.classList.remove('hover', 'lighting-code', 'lighting-tag');
//           document.querySelector(`.code[data-id='${id}']`)?.classList.remove('lighting-code');
//         }
//         if (code) {
//           code.classList.remove('lighting-code');
//           document.querySelector(`.shape[data-id='${id}']`)?.classList.remove('hover', 'lighting-tag');
//         }
//       }
//     });
//   }
// }

// export default shapesEventListner;
