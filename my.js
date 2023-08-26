// JavaScript for handling the mobile navigation menu
document.querySelector('.fas.fa-bars').addEventListener('click', function () {
    document.querySelector('nav ul').classList.toggle('show');
});

document.querySelector('.fas.fa-times').addEventListener('click', function () {
    document.querySelector('nav ul').classList.remove('show');
});
