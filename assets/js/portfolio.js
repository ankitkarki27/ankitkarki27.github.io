// Projects data
const projects = [
    {
        title: "Constructions Company Website",
        description: "A full-stack website providing information about our services, projects, and company history",
        tags: ["React", "Laravel", "MySQL", "Tailwind"],
        github: "https://github.com/ankitkarki27/Construction-backend",
        link: "https://rainbowconstructions.vercel.app/"
    },
    {
        title: "Jobs Nepal",
        description: "A Job Portal system built with Laravel, Tailwind CSS, HTML, JS, and MySQL.",
        tags: ["Laravel", "MySQL", "Tailwind CSS"],
        github: "https://github.com/ankitkarki27/job-portal",

    },
    {
        title: "Trendy: E-commerce App",
        description: "An E-commerce Store System built with Django, Tailwind CSS, HTML, JS and PostgreSQL.",
        link: "https://ankitkarki27.pythonanywhere.com/",
        github: "#"
    },
    {
        title: "Bookmarker",
        description: "A full-stack web application for saving, organizing, and managing favorite websites link efficiently.",
        tags: ["Django", "React"],
        github: "https://github.com/ankitkarki27/bookmarker",
        link: "https://bookmarker-theta.vercel.app/",

    },
    {
        title: "Donors Nepal",
        description: "A full-stack Online Blood Donors Finder System built with PHP,Laravel, MySQL, HTML, CSS and Bootstrap.",
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
