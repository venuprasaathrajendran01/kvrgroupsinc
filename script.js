window.addEventListener('load', function() {
    // Show loading element for at least 5 seconds
    setTimeout(function() {
        // Hide loading element
        document.getElementById('loading').style.display = 'none';

        // Initialize Typewriter effect
        typeWriter();

        // Initialize Scroll Progress Bar
        updateProgressBar();
    }, 2500); // 5000 milliseconds = 5 seconds
});

// Typewriter effect
function typeWriter() {
    const text = "Welcome to samplewebpage";
    const speed = 150; 
    let i = 0;
    const typewriterElement = document.getElementById('typewriter');

    function type() {
        if (i < text.length) {
            typewriterElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Scroll Progress Bar
window.onscroll = function() {
    updateProgressBar();
};

function updateProgressBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progress-bar').style.width = scrolled + "%";
}

// Scroll Fade-in
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.6,
    rootMargin: "0px 0px -200px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});



// Google Forms Redirection (when register button is clicked)
document.getElementById('registerButton').addEventListener('click', function() {
    window.location.href = ''; // Replace with your Google Forms link
});
// Function to toggle the navigation menu
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    const burger = document.querySelector('.burger');

    navLinks.classList.toggle('active'); // Add or remove the 'active' class
    burger.classList.toggle('open'); // Add or remove the 'open' class for animation
}
