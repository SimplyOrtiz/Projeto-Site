// Optional: smooth wheel-to-horizontal behavior on desktop
const container = document.getElementById('scroll-container');

// Only apply on desktops
function isHorizontalMode() {
  return window.innerWidth > 768;
}

container.addEventListener('wheel', (e) => {
  if (!isHorizontalMode()) return; // ignore in mobile
  e.preventDefault();
  container.scrollBy({
    left: e.deltaY * 1.2, // how fast the scroll feels
    behavior: 'smooth'
  });
}, { passive: false });

// Re-enable vertical scroll when resizing to mobile
window.addEventListener('resize', () => {
  if (!isHorizontalMode()) {
    container.scrollTo({ left: 0, top: 0 });
  }
});

let lastIndex = -1;

container.addEventListener('scroll', () => {
  const scrollLeft = container.scrollLeft;
  const panelWidth = container.clientWidth;
  const currentIndex = Math.round(scrollLeft / panelWidth);

  if(currentIndex !== lastIndex){
    console.log(`Entered slide ${currentIndex + 1}`);
    lastIndex = currentIndex;
    
    // Example: hide the arrow on the first panel
    const arrow = document.querySelector('.scroll-down');
    if(arrow) arrow.style.display = currentIndex === 0 ? 'flex' : 'none';

    var text = document.querySelector('#slider-counter');
    if(text) text.innerHTML = currentIndex+1;
  }
});
