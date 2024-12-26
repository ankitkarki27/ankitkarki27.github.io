        document.addEventListener('DOMContentLoaded', function() {
            new Typed('#typed-output', {
                strings: [
                    'BCA Student', 
                    'Django Developer', 
                    'Backend Developer',
                    'PHP Developer', 
                    'Learner',
                    'Problem Solver'
                ],
                typeSpeed: 160,
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

    // Projects data
const projects = [
    {
        title: "Trendy E-commerce",
        description: "A full-stack E-commerce Store System built with Django, Tailwind CSS, HTML, JS and PostgreSQL.",
        image: "assets/image/project-trendy.png",
        tags: ["Django", "PostgreSQL"],
        github: "https://github.com/ankitkarki27/dj-ecomstore.git",
        date: "2024"
    },
    
    {
        title: " Bookmarker ",
        description: "A full-stack web application for saving, organizing, and managing favorite websites link efficiently.",
        image: "assets/image/project-bookmarker.jpg",
        tags: ["Django", "React"],
        github: "https://github.com/ankitkarki27/dj-ecomstore.git",
        date: "2024"
    },
    {
        title: "Blogging System API",
        description: " A backend API for managing blogging system.It supports post creation, updates and deletes. ",
        image: "assets/image/project-blog-api.png",
        tags: ["Django", "Django Rest Framework"],
        github: "https://github.com/ankitkarki27/blog-system-backend.git",
        date: "2024"
    },
    {
        title: "Todo App",
        description: "A full-stack Todo app with CRUD functionality.It is built using Django REST API and React.",
        image: "assets/image/project-todo.jpg",
        tags: ["Django", "React"],
        github: "https://github.com/ankitkarki27/django-react-todo-rest-api.git",
        date: "2024"
    },
    {
        title: "Donors Nepal",
        description: " A full-stack Online Blood Donors Finder System built with PHP, MySQL, HTML, CSS and Bootstrap.",
        image: "assets/image/project-dn.jpg",
        tags: ["PHP", "Laravel","MySQL"],
        github: "https://github.com/ankitkarki27/Donors-Nepal.git",
        date: "2024"
    },
    {
        title: "Uthaoo",
        description: "  A full-stack Scrap Management System built with PHP, MySQL, HTML, CSS and JS.  ",
        image: "assets/image/project-uthaoo.jpg",
        tags: ["PHP", "MySQL"],
        github: "https://github.com/ankitkarki27/uthaoo-Online-Scrap-Collection-System.git",
        date: "2024"
    },
    
];

// Container element
const container = document.getElementById("projects-container");

// Generate project cards
projects.forEach(project => {
    // Create card element
    const card = document.createElement("div");
    card.className = "group relative overflow-hidden rounded-xl bg-gray-800 shadow-lg max-h-96 hover:shadow-2xl transition-shadow";
    card.dataset.aos = "fade-up";

    // Set inner HTML
    card.innerHTML = `
        <div class="relative overflow-hidden">
            <img src="${project.image}" alt="${project.title}" class="w-90 h-50 object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-4 left-4 right-4 text-gray-100">
                    <div class="flex space-x-2">
                        ${project.tags.map(tag => `<span class="px-2 py-1 bg-gray-700 text-xs rounded-full">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
        <div class="p-6 bg-gray-900 rounded-b-xl">
            <h3 class="text-white text-xl font-bold mb-2 group-hover:text-blue-400 transition duration-300">${project.title}</h3>
            <p class="text-gray-300 text-sm mb-6">${project.description}</p>
            <div class="flex justify-between items-center">
                <div class="flex space-x-4">
                    <a href="${project.github}" target="_blank" 
                       class="text-sm text-gray-300 hover:text-gray-400 transition-transform transform hover:scale-110">
                        <i class="fab fa-github"></i> Code
                    </a>
                </div>
                <div class="flex items-center text-sm text-gray-400">
                    <i class="far fa-calendar-alt mr-2"></i>
                    <span>${project.date}</span>
                </div>
            </div>
        </div>
    `;

    // Append card to container
    container.appendChild(card);
});
