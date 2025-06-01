// Projects data
const projects = [
    {
        title: "Constructions Company Website",
        description: "A full-stack web app built with Laravel, React (Vite), and MySQL. Admins can easily manage and publish projects, blogs, and services. Visitors can explore project galleries, read blog posts, and learn about the company. Fully responsive and optimized for a smooth user experience.",
        tags: ["React", "Laravel", "MySQL", "Tailwind"],
        github: "https://github.com/ankitkarki27/Construction-backend",
        link: "https://rainbowconstructions.vercel.app/"
    },
    {
        title: "Jobs Nepal",
        description: "A job portal built with Laravel, Tailwind CSS, and MySQL. Companies can post job openings, and seekers can browse and apply easily through a user-friendly interface.",
        tags: ["Laravel", "MySQL", "Tailwind CSS"],
        github: "https://github.com/ankitkarki27/job-portal",

    },
    {
        title: "Trend-e-vision: E-commerce App",
        description: "An e-commerce platform built with Django, Tailwind CSS, and PostgreSQL. It offers a seamless shopping experience with product browsing, order and checkout.",
        link: "https://ankitkarki27.pythonanywhere.com/",
        github: "https://github.com/ankitkarki27/dj-ecomstore.git"
    },
    {
        title: "Bookmarker",
        description: "A full-stack web app for efficiently saving, organizing, and managing your favorite website links in one place.",
        tags: ["Django", "React"],
        github: "https://github.com/ankitkarki27/bookmarker",
        link: "https://bookmarker-theta.vercel.app/",

    },
    {
        title: "Donors Nepal",
        description: "An online blood donor finder built with PHP, MySQL, and Bootstrap. It connects blood seekers with nearby donors using the Haversine algorithm for accurate location-based matching.",
        tags: ["PHP", "Laravel", "MySQL"],
        github: "https://github.com/ankitkarki27/Donors-Nepal.git",
        link: "https://github.com/ankitkarki27/Donors-Nepal.git",

    }
];

// Function to create project HTML
function createProjectHTML(project, index) {
    return `
            <div class="border-b border-gray-800 pb-8 animate-slide-up stagger-${index + 1} hover:border-gray-700 transition-colors">
                <h3 class="text-xl font-semibold mb-3 text-white">${project.title}</h3>
                <p class="text-gray-400 mb-12 space-y-4 leading-relaxed">
               
                    ${project.description}
                </p>
                <div class="flex text-m space-x-4">
                    
                    <a href="${project.github}" class="text-gray-300 hover:text-white transition-colors flex items-center group text-sm">
                        GitHub
                        
                    </a>
                    <a href="${project.link}" class="text-green-300 hover:text-blue transition-colors flex items-center group text-sm">
                        Learn More
                    </a>
                </div>
            </div>
        `;
}

// Function to render projects
function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');

    projects.forEach((project, index) => {
        projectsContainer.innerHTML += createProjectHTML(project, index);
    });
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', renderProjects);
