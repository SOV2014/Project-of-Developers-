import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';



new Accordion('.accordion-container', {
  duration: 400,
  showMultiple: true,
});


// const accordion = document.querySelector('.ac-header');
// accordion.forEach(el => {
//   el.addEventListener('click', (event) => {
//     let element = event.currenTarget
//     console.log(element);
//   })
// });

