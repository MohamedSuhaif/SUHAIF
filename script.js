
// Smooth scrolling effect for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Example of simple toggle for course description
document.addEventListener("DOMContentLoaded", function() {
    const courses = document.querySelectorAll('.course');
    
    courses.forEach(course => {
        course.addEventListener('click', () => {
            alert("You clicked on" ${course.querySelector('h2').innerText}!);
        });
    });
});