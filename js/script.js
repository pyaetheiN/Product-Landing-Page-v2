// ===== accordion ===== \\
const accordionHeaders = document.querySelectorAll('.faq__accordion--header'),
      accordionTabs = document.querySelectorAll('.faq__accordion--tab');


// an arrow function does not have its own this, resulting in eror
accordionHeaders.forEach(n => n.addEventListener('click', function(e) {
  let itemClass = this.parentNode.className;

  for (i = 0; i < accordionTabs.length; i++) {
    accordionTabs[i].className = 'faq__accordion--tab close';
  }

  if (itemClass === 'faq__accordion--tab close') {
    this.parentNode.className = 'faq__accordion--tab open';
  }
}));


// ===== slider ===== \\
const reviewNav = document.querySelector('.reviews__buttons'),
      reviewBtns = document.querySelectorAll('.reviews__btn'),
      reviewSlider = document.querySelector('.reviews__content');

reviewBtns[0].onclick = function(){
  reviewSlider.style.transform = 'translateX(0)';
  for(i = 0; i < reviewBtns.length; i++){
    reviewBtns[i].classList.remove('active');
  }
  this.classList.add('active');
}

reviewBtns[1].onclick = function(){
  reviewSlider.style.transform = 'translateX(-110%)';
  for(i = 0; i < reviewBtns.length; i++){
    reviewBtns[i].classList.remove('active');
  }
  this.classList.add('active');
}

reviewBtns[2].onclick = function(){
  reviewSlider.style.transform = 'translateX(-215%)';
  for(i = 0; i < reviewBtns.length; i++){
    reviewBtns[i].classList.remove('active');
  }
  this.classList.add('active');
}


// ===== touch slider ===== \\
// const reviewTabs = document.querySelectorAll('.reviews__tab');

// let isDragging = false,
// currentIndex,
// currentTranslate,
// prevTranslate,
// animationID,
// startPos = 0;

// reviewTabs.forEach((reviewTab, index) => {
//   const tabImage = reviewTab.querySelector('img')
//   tabImage.addEventListener('dragstart', (e) => e.preventDefault())

//   reviewTab.addEventListener('touchstart', touchStart(index))
//   reviewTab.addEventListener('touchend', touchEnd)
//   reviewTab.addEventListener('touchmove', touchMove)

//   reviewTab.addEventListener('mousedown', touchStart(index))
//   reviewTab.addEventListener('mouseup', touchEnd)
//   reviewTab.addEventListener('mouseleave', touchEnd)
//   reviewTab.addEventListener('mousemove', touchMove)
// })

// function touchStart(index){
//   return function(event){
//     isDragging = true
//     currentIndex = index
//     startPos = getPositionX(event)
//     animationID = requestAnimationFrame(animation)

//     reviewSlider.classList.add('grabbing')
//   }
// }

// function touchMove(event){
//   if(isDragging){
//     const currentPosition = getPositionX(event)
//     currentTranslate = prevTranslate + currentPosition - startPos

//     reviewBtns.forEach(n => {
//       setSliderPosition()
//       for(i = 0; i < reviewBtns.length; i++){
//         reviewBtns[i].classList.remove('active');
//       }
//       this.classList.add('active');
//     })
//   }
// }

// function touchEnd(){
//   isDragging = false
//   cancelAnimationFrame(animationID)

//   const movedBy = currentTranslate - prevTranslate

//   if(movedBy < -100 && currentIndex < reviewTabs.length - 1){
//     currentIndex += 1
//   }
//   if(movedBy > 100 && currentIndex > 0){
//     currentIndex -= 1
//   }

//   setPositionByIndex()

//   reviewSlider.classList.remove('grabbing')
// }


// function getPositionX(event){
//   return event.type.includes('mouse')
//     ? event.clientX
//     : event.touches[0].clientX
// }

// function animation(){
//   setSliderPosition()
//   if(isDragging){
//     requestAnimationFrame(animation)
//   } 
// }

// function setSliderPosition(){
//   reviewSlider.style.transform = `translateX(${currentTranslate}px)`
// }

// function setPositionByIndex(){
//   currentTranslate = currentIndex * -reviewSlider.clientWidth
//   prevTranslate = currentTranslate

//   setSliderPosition()
// }