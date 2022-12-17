const photo = document.querySelector('#js-photo');
const photoBorder = document.querySelector('#js-photo-border');
const photoImg =  document.querySelector('#js-photo-img');
//rem is declared in navbar.js

window.addEventListener('scroll', () => {
  // console.log(pageYOffset, photo.clientHeight, photo.offsetHeight, photo.clientHeight + (4 * rem));

	if((pageYOffset < photo.clientHeight + (4 * rem)) || (pageYOffset > (photo.clientHeight * 2)  + (24 * rem))){
    photoBorder.classList.remove('photo__border-in');
    photoBorder.classList.add('photo__border-out');
    photoImg.classList.remove('photo__img-in');
    photoImg.classList.add('photo__img-out');
  }
  else {
    photoBorder.classList.remove('photo__border-out');
    photoBorder.classList.add('photo__border-in');
    photoImg.classList.remove('photo__img-out');
    photoImg.classList.add('photo__img-in');
  }
});
