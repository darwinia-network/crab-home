//
// modal.js
// Theme module
//

const modals = document.querySelectorAll('.modal');

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

function overflowHide() {
  const scrollbarWidth = getScrollbarWidth();

  document.documentElement.style.overflow = 'hidden';
  document.body.style.paddingRight = scrollbarWidth + 'px';
}

function overflowShow() {
  document.documentElement.style.overflow = '';
  document.body.style.paddingRight = '';
}

modals.forEach(function(modal) {
  modal.addEventListener('show.bs.modal', function() {
    overflowHide();
  });

  modal.addEventListener('hidden.bs.modal', function() {
    overflowShow();
  });
});
