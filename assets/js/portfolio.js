        document.addEventListener('DOMContentLoaded', function() {
            new Typed('#typed-output', {
                strings: [
                    'BCA Student', 
                    'Django Developer', 
                    'Backend Developer',
                    'PHP Developer', 
                    'Learner'
                ],
                typeSpeed: 120,
                backSpeed: 60,
                loop: true
            });

            // Smooth scrolling for navigation
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        });
    
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
