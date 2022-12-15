const photo = document.querySelector('#js-photo');
const photoBorder = document.querySelector('#js-photo-border');
const photoImg =  document.querySelector('#js-photo-img');
//rem is declared in navbar.js

window.addEventListener('scroll', () => {
  //console.log(pageYOffset, photo.clientHeight, photo.offsetHeight, (photo.clientHeight * 2)  + +(24 * rem));
	if((pageYOffset < photo.clientHeight - 4 * rem) || (pageYOffset > (photo.clientHeight * 2)  + (24 * rem))){
    photoBorder.style.transform = 'translate(0px, 0px)';
    photoBorder.style.borderColor = '#1a1a1a';
    photoImg.style.transform = 'translate(0px, 0px)';
    photoImg.style.filter = 'grayscale(1)';
  }
  else {
    photoBorder.style.transform = 'translate(10px, 10px)';
    photoBorder.style.borderColor = '#ba68f4';
    photoImg.style.transform = 'translate(-20px, -20px)';
    photoImg.style.filter = 'grayscale(0)';
  }
});
