// Wait for the HTML document to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
  
  // Set up the Intersection Observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      // If the element is visible in the viewport
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        
        // Stop observing the element once it has animated in.
        // This ensures the animation only happens once for a cleaner user experience.
        observer.unobserve(entry.target);
      } 
    });
  }, {
    threshold: 0.1, // Triggers the animation when 10% of the element is visible
    rootMargin: "0px 0px -20px 0px" // Adds a slight buffer so it triggers just before scrolling over it
  });

  // Select all project cards and resume items
  // Note: If a page doesn't have these elements (like your new detail pages), 
  // this just returns an empty list and safely does nothing.
  const animatedElements = document.querySelectorAll('.card, .resume-item');

  // Tell the observer to watch each of these elements
  animatedElements.forEach((el) => {
    // Add a base class to hide them initially via CSS
    el.classList.add('hidden'); 
    observer.observe(el);
  });

});