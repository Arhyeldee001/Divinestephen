document.addEventListener('DOMContentLoaded', function() {
    const section = document.querySelector('#skills-section');
    const progressBars = document.querySelectorAll('.progress');

    // Function to check if the element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to animate the progress bars
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const percent = bar.getAttribute('data-progress'); // Retrieve progress percentage
            let width = 0; // Starting width

            // Use setInterval for smooth animation
            const interval = setInterval(() => {
                if (width >= percent) {
                    clearInterval(interval); // Stop the animation when the target is reached
                } else {
                    width++;
                    bar.style.width = width + '%'; // Update bar width
                    bar.querySelector('span').style.opacity = 1; // Show the percentage text
                    bar.querySelector('span').textContent = width + '%'; // Update percentage text
                }
            }, 20); // Speed of the animation (you can adjust this)
        });
    }

    // Scroll event listener to trigger the animation when section is in view
    function handleScroll() {
        if (isInViewport(section)) {
            animateProgressBars();
            window.removeEventListener('scroll', handleScroll); // Prevent multiple triggers
        }
    }

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
});





document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll(".c-progress-bar");

  const observerOptions = {
    root: null, // Observing the entire viewport
    rootMargin: "0px",
    threshold: 0.5 // 50% of the element must be visible to trigger the animation
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the animation when the section is in view
        entry.target.style.animation = "progresss 4s forwards";
        observer.unobserve(entry.target); // Optional: Stop observing once animation is triggered
      }
    });
  }, observerOptions);

  progressBars.forEach(bar => observer.observe(bar));
});


