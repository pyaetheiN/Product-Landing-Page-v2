// ===== accordion ===== \\
const accordionHeader = document.querySelectorAll('.faq__accordion--header'),
      accordionTab = document.querySelectorAll('.faq__accordion--tab');

function toggleTab() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < accordionTab.length; i++) {
    accordionTab[i].className = 'faq__accordion--tab close';
  }

  if (itemClass === 'faq__accordion--tab close') {
    this.parentNode.className = 'faq__accordion--tab open';
  }
};

accordionHeader.forEach(n => n.addEventListener('click', toggleTab));


// ===== slider ===== \\
const reviewNav = document.querySelector('.reviews__buttons'),
      reviewBtns = document.querySelectorAll('.reviews__btn'),
      reviewSlide = document.querySelector('.reviews__content');

reviewBtns[0].onclick = function(){
  reviewSlide.style.transform = 'translateX(0)';
  for(i = 0; i < 2; i++){
    reviewBtns[i].classList.remove('active');
  }
  this.classList.add('active');
}

reviewBtns[1].onclick = function(){
  reviewSlide.style.transform = 'translateX(-25%)';
  for(i = 0; i < 2; i++){
    reviewBtns[i].classList.remove('active');
  }
  this.classList.add('active');
}


