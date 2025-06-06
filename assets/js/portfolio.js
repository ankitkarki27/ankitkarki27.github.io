// Projects data

const experience = [
  {
    title: "Backend Developer (Intern → Junior Developer)",
    company: "NepBigyapan",
    description:
      "Started as a backend intern and transitioned to Junior Developer over 6 months. Gained hands-on experience with Laravel and Django while working on projects like an institution management system and a restaurant management system. Built RESTful APIs and explored full-stack development through small internal projects.",
    date: "Dec 2024 – May 2025"
  }
];


const projects = [
    {
        title: "ELearning Management System",
        description: "A Full-stack eLearning platform with community features, built with Django, React (Vite), and PostgreSQL. Implements Redux Toolkit for state management and Cloudinary for media storage. Admins can create/manage courses, track enrollments, and moderate forums. Students can enroll in courses, complete lessons, and participate in discussion forums.",
        tags: [
            "React (Vite)",
            "Django",
            "PostgreSQL",
            "Redux Toolkit",
            "Cloudinary",
            "Tailwind CSS"
        ],
        github: "https://github.com/ankitkarki27/eLearning-Platform-django-react",

    },
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

    },
    {
        title: "Uthaoo: Online Scrap Collection System",
        category: "full-stack",
        description: "A full-stack web application for scheduling and managing scrap pickups, developed using PHP for the backend, MySQL for the database, and HTML, CSS, and JavaScript for the frontend.",
        image: "assets/image/project-uthaoo.jpg",
        tags: ["PHP", "MySQL"],
        github: "https://github.com/ankitkarki27/uthaoo-Online-Scrap-Collection-System.git",
        date: "2023"
    }
];

// Function to create experience HTML
function createExperienceHTML(experience, index) {
    return `
        <div class="border-b border-gray-800 pb-8 animate-slide-up stagger-${index + 1} hover:border-gray-700 transition-colors">
            <h3 class="text-xl font-semibold mb-3 text-white">${experience.title}</h3>
           <p class="text-base font-medium text-gray-300 mb-2">${experience.company}</p>
            <p class="text-gray-400 mb-4 leading-relaxed">
                ${experience.description}
            </p>
            
        </div>
    `;
}


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
                      ${project.link ? `
                    <a href="${project.link}" class="text-green-300 hover:text-blue transition-colors flex items-center group text-sm">
                        Learn More
                    </a>
                     ` : ''}
                </div>
            </div>
        `;
}

function renderExperience() {
    const experienceContainer = document.getElementById('experience-container');

    experience.forEach((exp, index) => {
        experienceContainer.innerHTML += createExperienceHTML(exp, index);
    });
}

// Function to render projects
function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');

    projects.forEach((project, index) => {
        projectsContainer.innerHTML += createProjectHTML(project, index);
    });
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderExperience();
});

