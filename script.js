document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const slideInterval = 2500; // 2 seconds

    const showSlides = () => {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[slideIndex].classList.add('active');
        slideIndex++;
        if (slideIndex >= slides.length) { slideIndex = 0 }
    }

    // Initial call to show slides
    showSlides();

    // Auto play slides
    setInterval(() => {
        showSlides();
    }, slideInterval);
});
// Apply fade animation before navigating to internal link
document.querySelectorAll('.internal-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        document.body.style.opacity = 0; // Apply fade out animation
        setTimeout(() => {
            window.location.href = link.href; // Navigate to the new page
        }, 300); // Adjust the timeout value as needed to match the transition duration
    });
});
/*yaha se 2nd page */

function zoomIn(element) {
    element.classList.add('zoom');
}

function zoomOut(element) {
    element.classList.remove('zoom');
}

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const sectionPosition = targetSection.offsetTop;
        const currentPosition = window.pageYOffset;
        const distance = sectionPosition - currentPosition;
        const duration = 1000; // in milliseconds
        let start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            window.scrollTo(0, easeInOutQuad(progress, currentPosition, distance, duration));
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
});