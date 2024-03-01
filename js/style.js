
//active class

function setActive(element) {
    // Remove "active" class from all navigation items
    document.querySelectorAll('.nav-link').forEach(function (item) {
        item.classList.remove('active');
    });

    // Add "active" class to the clicked navigation item
    element.classList.add('active');
}







// for success counter
function animateCounters() {
    document.querySelectorAll('.count').forEach(function (element) {
        var finalValue = parseInt(element.getAttribute('data-final'));
        var duration = 6000; 
        var interval = 50;

        var step = finalValue / (duration / interval);
        var suffix = element.getAttribute('data-suffix') || '';


        var current = 0;
        var intervalId = setInterval(function () {
            current += step;
            element.textContent ="+" + Math.ceil(current);

            if (current >= finalValue) {
                clearInterval(intervalId);
                element.textContent = finalValue +suffix;
            }
        }, interval);
    });
}

// Trigger the animation on page load
window.onload = animateCounters;



//for begroup span
function animateBegroup(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            entry.target.classList.add('animate-begroup');
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var observer = new IntersectionObserver(animateBegroup, { threshold: 0.8 });

    observer.observe(document.getElementById('begroupSpan'));
});









