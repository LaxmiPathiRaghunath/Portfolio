// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute('href'); // Get the target section ID
      const targetSection = document.querySelector(targetId); // Find the target section
      if (targetSection) {
          targetSection.scrollIntoView({
              behavior: 'smooth', // Smooth scroll
              block: 'start' // Align to the top of the section
          });
      }
  });
});

// Dynamic year update for the footer
const currentYear = new Date().getFullYear(); // Get the current year
document.querySelector('footer p').innerHTML = `&copy; ${currentYear} Raghunath Laxmi Pathi. All rights reserved.`;

// Highlight the current section in the navbar while scrolling
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section'); // Get all sections
  const navLinks = document.querySelectorAll('header nav a'); // Get all navbar links

  sections.forEach(section => {
      const sectionTop = section.offsetTop; // Get the top position of the section
      const sectionHeight = section.clientHeight; // Get the height of the section
      if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight - 50) {
          const sectionId = section.getAttribute('id'); // Get the section ID
          navLinks.forEach(link => {
              link.classList.remove('active'); // Remove active class from all links
              if (link.getAttribute('href') === `#${sectionId}`) {
                  link.classList.add('active'); // Add active class to the current link
              }
          });
      }
  });
});

// Optional: Add a "Back to Top" button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '↑ Back to Top';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px 20px';
backToTopButton.style.backgroundColor = '#333';
backToTopButton.style.color = '#fff';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.display = 'none'; // Hide by default
document.body.appendChild(backToTopButton);

// Show/hide the "Back to Top" button based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
      backToTopButton.style.display = 'block'; // Show the button
  } else {
      backToTopButton.style.display = 'none'; // Hide the button
  }
});

// Scroll to top when the "Back to Top" button is clicked
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});