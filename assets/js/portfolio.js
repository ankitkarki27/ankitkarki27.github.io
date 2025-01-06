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
        title: "JobsNepal: Job Portal",
        category: "full-stack",
        description: "A full-stack Job Portal system built with Laravel, Tailwind CSS, HTML, JS, and MySQL.",
        image: "assets/image/project-jobsnepal.png",
        tags: ["Laravel", "MySQL", "Tailwind CSS"],
        github: "https://github.com/ankitkarki27/Lara-job-portals",
        date: "2024"
    },
    {
        title: "Trendy : E-commerce", 
        category: "full-stack",
        description: "A full-stack E-commerce Store System built with Django, Tailwind CSS, HTML, JS and PostgreSQL.",
        image: "assets/image/project-trendy.png",
        tags: ["Django", "PostgreSQL"],
        github: "https://github.com/ankitkarki27/dj-ecomstore.git",
        date: "2024"
    },
    {
        title: "Bookmarker", 
        category: "full-stack",
        description: "A full-stack web application for saving, organizing, and managing favorite websites link efficiently.",
        image: "assets/image/project-bookmarker.jpg",
        tags: ["Django", "React"],
        github: "https://github.com/ankitkarki27/bookmarker",
        link: "https://bookmarker-theta.vercel.app/",
        date: "2024"
    },
    {
        title: "Proud - Artists Platform",
        category: "frontend",
        description: "A frontend web app for artists to showcase, organize, and sell their work using a digital platform.",
        image: "assets/image/project-proud.png",
        tags: ["Tailwind CSS", "HTML", "JavaScript"],
        github: "https://github.com/ankitkarki27/proud-frontend-html-tailwindcss-js",
        link: "https://proud-artists-platform.netlify.app/",
        date: "2023"
    },
    {
        title: "Blogging System API", 
        category: "backend",
        description: "A backend API for managing blogging system.It supports post creation, updates and deletes.",
        image: "assets/image/project-blog-api.png",
        tags: ["Django", "Django Rest Framework"],
        github: "https://github.com/ankitkarki27/blog-system-backend.git",
        date: "2024"
    },
    {
        title: "React Todo App", 
        category: "full-stack",
        description: "A full-stack Todo app with CRUD functionality.It is built using Django REST API and React.",
        image: "assets/image/project-todo.jpg",
        tags: ["Django", "React"],
        github: "https://github.com/ankitkarki27/django-react-todo-rest-api.git",
        date: "2024"
    },
    {
        title: "Donors Nepal", 
        category: "full-stack",
        description: "A full-stack Online Blood Donors Finder System built with PHP,Laravel, MySQL, HTML, CSS and Bootstrap.",
        image: "assets/image/project-dn.jpg",
        tags: ["PHP", "Laravel", "MySQL"],
        github: "https://github.com/ankitkarki27/Donors-Nepal.git",
        date: "2024"
    },
    {
        title: "Uthaoo", 
        category: "full-stack",
        description: "A full-stack Scrap Management System built with PHP, MySQL, HTML, CSS and JS.",
        image: "assets/image/project-uthaoo.jpg",
        tags: ["PHP", "MySQL"],
        github: "https://github.com/ankitkarki27/uthaoo-Online-Scrap-Collection-System.git",
        date: "2023"
    }
];

// Function to create a project card
function createProjectCard(project) {
    return `
    <div class="group relative overflow-hidden rounded-xl bg-gray-800 shadow-lg max-h-96 hover:shadow-2xl transition-shadow project-card" data-category="${project.category}">
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
        <div class="p-6 bg-gray-800 rounded-b-xl">
          <h3 class="text-white text-xl font-bold mb-2 group-hover:text-blue-400 transition duration-300">${project.title}</h3>
            <p class="text-gray-300 text-sm mb-6 justify">${project.description}</p>
            <div class="flex justify-between items-center">
                <div class="flex space-x-4">
                    ${project.github ? `
                        <a href="${project.github}" target="_blank" class="text-sm text-gray-200 hover:text-blue-400 transition-transform transform">
                            <i class="fab fa-github"></i>  Code
                        </a>
                    ` : ''}
                    ${project.link ? `
                        <a href="${project.link}" target="_blank" class="text-sm text-gray-200 hover:text-red-400 transition-transform transform">
                            <i class="fas fa-external-link-alt"></i> Live
                        </a>
                    ` : ''}
                </div>
                <div class="flex items-center text-sm text-gray-200">
                    <i class="far fa-calendar-alt mr-2"></i>
                    <span>${project.date}</span>
                </div>
            </div>
        </div>
    </div>`;
}

// Container element
const projectsGrid = document.getElementById("projects-grid");

// Render all projects
projectsGrid.innerHTML = projects.map(project => createProjectCard(project)).join('');

// Function to filter projects
function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            card.classList.add('animate-fade-in');
        } else {
            card.style.display = 'none';
        }
    });
}

// Initialize filters
document.addEventListener('DOMContentLoaded', function () {
    // Filter button functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-blue-600', 'text-white');
                btn.classList.add('bg-gray-200', 'text-gray-800');
            });
            button.classList.remove('bg-gray-200', 'text-gray-800');
            button.classList.add('active', 'bg-blue-600', 'text-white');

            // Filter projects
            filterProjects(button.dataset.filter);
        });
    });
});
