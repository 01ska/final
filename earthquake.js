document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('main-image');
    const hoverImage = document.getElementById('hover-image');
  

    hoverImage.style.display = 'none';
  

    mainImage.addEventListener('mouseenter', () => {
      mainImage.style.display = 'none';
      hoverImage.style.display = 'block'; 
    });
  
    hoverImage.addEventListener('mouseleave', () => {
      hoverImage.style.display = 'none';
      mainImage.style.display = 'block';
    });
  });
  