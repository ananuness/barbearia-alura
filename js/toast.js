const form = document.querySelector('.appointment__form');
const button = document.querySelector('.appointment__form-btn');
const toast = document.querySelector('.appointment__toast');
// const closeIcon = document.querySelector('.toast__close');
const progress = document.querySelector('.toast__progress');

let toastTimer, progressTimer;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  toast.classList.add('appointment__toast--active');
  progress.classList.add('toast__progress--active');
  
  toastTimer = setTimeout(() => {
    toast.classList.remove('appointment__toast--active');
  }, 5000);
  
  progressTimer = setTimeout(() => {
    progress.classList.remove('toast__progress--active');
  }, 5300);
});
      
// closeIcon.addEventListener('click', () => {
//   toast.classList.remove('appointment__toast--active');
        
//   setTimeout(() => {
//     progress.classList.remove('toast__progress--active');
//   }, 300);
  
//   clearTimeout(toastTimer);
//   clearTimeout(progressTimer);
// });