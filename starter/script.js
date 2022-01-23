'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
console.log(document.getElementsByClassName('btn'));

//creating and inserting element
/*
const message = document.createElement('div'); // it is creating a DOM elemnent and store into the variable.
message.classList.add('cookie-message');
// message.textContent = 'We use cookie for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message); prepend is used to add some dom element as a first child to the html file dynamically or adding DOM element created by JS

header.append(message); //append used to add as a last child.
// header.append(message.cloneNode(true)); append in multiple position
// header.before(message);
// header.after(message);

//delete element

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // message.parentElement.removeChild(message);
  });

//styles

message.style.backgroundColor = '#37383d'; // this style attribute set inline styling and it only can read the inline style only;
message.style.width = '120%';

// getComputedStyle is used to read all the style added to the element

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
*/
//Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);

logo.alt = 'Beautiful minimalist logo';

//Non-standard
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src); //it will return the absolute url of the img
console.log(logo.getAttribute('src')); //it will return the relative url of the img

//classes

logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

//smooth scroling adding

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1cords = section1.getBoundingClientRect();
  // console.log(s1cords);
  // console.log(e.target.getBoundingClientRect());

  // console.log('current scroll (x/y)', window.pageXOffset, window.pageYOffset);
  // console.log(
  //   'heigth/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  //scroling
  /* window.scrollTo(
    s1cords.left + window.pageXOffset,
    s1cords.top + window.pageYOffset
  ); // the positing of the function getBoundingClientRect() is relative depending on the view port that why to work scroling method from any position we have to define the absoulute positing to work properly
  */

  // by passing object

  // window.scrollTo({
  //   left: s1cords.left + window.pageXOffset,
  //   top: s1cords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //Modern Way
  section1.scrollIntoView({ behavior: 'smooth' });
});

// old way of listning events is using on before the event and then implementing the functions

// random color generator
// const randomInt = (min, max) => {
//   Math.floor(math.random() + (max - min + 1) * min);
//   const randomColor = () => {
//     `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
//   };
// };
