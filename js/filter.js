document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const portfolioGrid = document.getElementById('portfolio-grid');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filterValue = this.getAttribute('data-filter');

      filterButtons.forEach(btn => {
        btn.classList.remove('bg-primary', 'text-background-dark');
        btn.classList.add('bg-white/10', 'hover:bg-white/20', 'text-white/70', 'hover:text-white');
      });

      this.classList.add('bg-primary', 'text-background-dark');
      this.classList.remove('bg-white/10', 'hover:bg-white/20', 'text-white/70', 'hover:text-white');
      
      portfolioItems.forEach(item => item.classList.add('hidden'));
      portfolioGrid.style.opacity = 0;

      let itemsToShow = filterValue === 'all'
        ? portfolioItems
        : document.querySelectorAll(`.${filterValue}`);

      setTimeout(() => {
        itemsToShow.forEach(item => item.classList.remove('hidden'));
        portfolioGrid.style.opacity = 1;
      }, 50);
    });
  });

  document.querySelector('[data-filter="all"]').click();
});
