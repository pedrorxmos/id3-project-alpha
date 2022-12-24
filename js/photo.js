const photo = document.querySelector('#js-photo');
const photoBorder = document.querySelector('#js-photo-border');
const photoImg =  document.querySelector('#js-photo-img');
//rem is declared in navbar.js

console.log(photo.clientHeight)

window.addEventListener('scroll', () => {

  console.log('top', photo.getBoundingClientRect().top);
  console.log('bottom', photo.getBoundingClientRect().bottom);

	if((photo.getBoundingClientRect().top < window.innerHeight - photo.clientHeight/2) && (photo.getBoundingClientRect().bottom > photo.clientHeight/2)){
    photo.classList.remove('photo-out');
    photo.classList.add('photo-in');
    
  }
  else {
    photo.classList.remove('photo-in');
    photo.classList.add('photo-out');
  }

});
