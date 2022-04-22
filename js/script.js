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