const lightbox = GLightbox({
  selector: '.glightbox',
  touchNavigation: true,
  loop: true,
  autoplayVideos: true,
  closeButton: false,
  closeOnOutsideClick: true,
  openEffect: 'fade',
  closeEffect: 'fade'
});

// وقتی Lightbox باز شد:
lightbox.on('open', () => {
  // پیدا کردن لایه‌ی GLightbox
  const modal = document.querySelector('.gcontainer');
  if (!modal) return;

  // اگر دکمه هنوز ساخته نشده:
  if (!modal.querySelector('.custom-inside-close')) {
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.className = 'custom-inside-close';
    modal.appendChild(closeBtn);

    // رویداد کلیک برای بستن
    closeBtn.addEventListener('click', () => lightbox.close());
  }
});
