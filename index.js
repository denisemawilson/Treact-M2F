function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove('menu--open')
}



document.addEventListener("DOMContentLoaded", function() {
const observer = new IntersectionObserver ((entries) => {
    entries.forEach(entry => { 
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.values__container, .quality__container, .steps__container, .testimony__container').forEach(el => observer.observe(el));
});