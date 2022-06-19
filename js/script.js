// ===== menu toggle ===== \\
const navMenu = document.querySelector('.nav__menu'),
      navList = document.querySelector('.nav__list'),
      navLinks = document.querySelectorAll('.nav__link');

navMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navList.classList.toggle('active');
})


// ===== remove menu uponing clicking links ===== \\
navLinks.forEach(n => n.addEventListener('click', () => {
  navMenu.classList.remove('active');
  navList.classList.remove('active');
}))


// ===== accordion ===== \\
const accordionHeaders = document.querySelectorAll('.faq__accordion--header'),
      accordionTabs = document.querySelectorAll('.faq__accordion--tab');


// an arrow function does not have its own this, resulting in an error
accordionHeaders.forEach(n => n.addEventListener('click', function() {
  let itemClass = this.parentNode.className; // this referring to n

  // console.log(itemClass);
  // e.target would be too troublesome...

  for (i = 0; i < accordionTabs.length; i++) {
    accordionTabs[i].className = 'faq__accordion--tab close';
  }

  if (itemClass === 'faq__accordion--tab close') {
    this.parentNode.className = 'faq__accordion--tab open';
  }
}));


// ===== touch slider ===== \\
const reviewSlider = document.querySelector('.reviews__content'),
      reviewTabs = document.querySelectorAll('.reviews__tab');

let isDragging = false,
currentIndex = 0,
currentTranslate = 0,
prevTranslate = 0,
animationID, // undefined
startPos = 0;

reviewTabs.forEach((reviewTab, index) => {
  const tabImage = reviewTab.querySelector('img')
  tabImage.addEventListener('dragstart', (e) => e.preventDefault())

  reviewTab.addEventListener('touchstart', touchStart(index))
  reviewTab.addEventListener('touchend', touchEnd)
  reviewTab.addEventListener('touchmove', touchMove)

  reviewTab.addEventListener('mousedown', touchStart(index))
  reviewTab.addEventListener('mouseup', touchEnd)
  reviewTab.addEventListener('mouseleave', touchEnd)
  reviewTab.addEventListener('mousemove', touchMove)
})

function touchStart(index){
  return function(event){
    isDragging = true
    currentIndex = index
    startPos = getPositionX(event)
    animationID = requestAnimationFrame(animation)

    reviewSlider.classList.add('grabbing')
  }
}

function touchMove(event){
  if(isDragging){
    const currentPosition = getPositionX(event)
    currentTranslate = prevTranslate + currentPosition - startPos
  }
}

function touchEnd(){
  isDragging = false
  cancelAnimationFrame(animationID)

  const movedBy = currentTranslate - prevTranslate

  if(movedBy < -100 && currentIndex < reviewTabs.length - 1){
    currentIndex += 1
  }
  if(movedBy > 0 && currentIndex > 0){
    currentIndex -= 1
  }

  setPositionByIndex()

  reviewSlider.classList.remove('grabbing')
}


function getPositionX(event){
  return event.type.includes('mouse')
    ? event.clientX
    : event.touches[0].clientX
}

function animation(){
  setSliderPosition()
  if(isDragging){
    requestAnimationFrame(animation)
  } 
}

function setSliderPosition(){
  reviewSlider.style.transform = `translateX(${currentTranslate}px)`
}

function setPositionByIndex(){
  currentTranslate = currentIndex * -reviewSlider.clientWidth
  prevTranslate = currentTranslate

  setSliderPosition()
}