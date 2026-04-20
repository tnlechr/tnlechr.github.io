
console.log("✅ script.js is working");
const marquee = document.querySelector('.marquee');
const content = document.getElementById('marquee-content');

// Clone the content for seamless looping
const clone = content.cloneNode(true);
marquee.appendChild(clone);

window.addEventListener('load', () => {
  const contentWidth = content.offsetWidth;
  const speed = 100; // pixels per second
  const duration = contentWidth / speed;

  // Apply animation duration
  content.style.animationDuration = `${duration}s`;
  clone.style.animationDuration = `${duration}s`;

  // Create keyframes
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-${contentWidth}px); }
    }
  `;
  document.head.appendChild(style);
});

const galleryImages = document.querySelectorAll('.image-gallery img');
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const closeBtn = document.getElementById('lightbox-close');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt;
      lightbox.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
