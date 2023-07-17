// window.addEventListener('DOMContentLoaded', () => {
//     const sections = document.querySelectorAll('section');
//     const navLinks = document.querySelectorAll('header nav ul li a');

//     window.addEventListener('scroll', () => {
//         const currentPos = window.pageYOffset;

//         sections.forEach((section) => {
//             const sectionTop = section.offsetTop - 100;
//             const sectionHeight = section.offsetHeight;
//             const sectionId = section.getAttribute('id');

//             if (currentPos >= sectionTop && currentPos < sectionTop + sectionHeight) {
//                 navLinks.forEach((navLink) => {
//                     navLink.classList.remove('active');
//                 });

//                 document.querySelector(`header nav ul li a[href="#${sectionId}"]`).classList.add('active');
//             }
//         });
//     });

//     const header = document.querySelector('header');
//     window.addEventListener('scroll', () => {
//         header.classList.toggle('sticky', window.scrollY > 100);
//     });
// });
