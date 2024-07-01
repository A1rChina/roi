// script.js
document.addEventListener('DOMContentLoaded', () => {
    // 添加一些简单的交互效果
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
        });
        link.addEventListener('mouseleave', () => {
            link.style.textShadow = 'none';
        });
    });
});
