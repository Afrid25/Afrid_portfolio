document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Load initial data
    loadPortfolioData();
});

function loadPortfolioData() {
    // This function will load data from localStorage or use default data
    const data = JSON.parse(localStorage.getItem('portfolioData')) || getDefaultData();

    // Update profile picture
    if (data.profilePic) {
        document.getElementById('profile-pic').src = data.profilePic;
    }

    // Update about me
    if (data.about) {
        document.getElementById('about-text').textContent = data.about;
    }

    // Update skills
    if (data.skills) {
        const skillsList = document.getElementById('skills-list');
        skillsList.innerHTML = '';
        data.skills.forEach(skill => {
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item';
            skillItem.textContent = skill;
            skillsList.appendChild(skillItem);
        });
    }

    // Update projects
    if (data.projects) {
        const projectsList = document.getElementById('projects-list');
        projectsList.innerHTML = '';
        data.projects.forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.className = 'project-item';
            projectItem.innerHTML = `
                <img src="${project.image || 'https://via.placeholder.com/300x200'}" alt="${project.title}">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            `;
            projectsList.appendChild(projectItem);
        });
    }
}

function getDefaultData() {
    return {
        profilePic: 'https://via.placeholder.com/200x200',
        about: 'I am MD AFRID FOISAL OPU, a 2nd Semester CSE Student at IIUC. My focus areas include Cyber Security (learning), Web Development, and DSA.',
        skills: ['Cyber Security', 'Web Development', 'Data Structures & Algorithms', 'JavaScript', 'HTML', 'CSS'],
        projects: [
            {
                title: 'Blood for Life – Blood Bank Management Website',
                description: 'A comprehensive blood bank management system to connect donors with those in need.',
                image: 'https://via.placeholder.com/300x200'
            }
        ]
    };
}
=======
// Main JavaScript for Portfolio Website
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Load initial data
    loadPortfolioData();
});

function loadPortfolioData() {
    // This function will load data from localStorage or use default data
    const data = JSON.parse(localStorage.getItem('portfolioData')) || getDefaultData();

    // Update profile picture
    if (data.profilePic) {
        document.getElementById('profile-pic').src = data.profilePic;
    }

    // Update about me
    if (data.about) {
        document.getElementById('about-text').textContent = data.about;
    }

    // Update skills
    if (data.skills) {
        const skillsList = document.getElementById('skills-list');
        skillsList.innerHTML = '';
        data.skills.forEach(skill => {
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item';
            skillItem.textContent = skill;
            skillsList.appendChild(skillItem);
        });
    }

    // Update projects
    if (data.projects) {
        const projectsList = document.getElementById('projects-list');
        projectsList.innerHTML = '';
        data.projects.forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.className = 'project-item';
            projectItem.innerHTML = `
                <img src="${project.image || 'https://via.placeholder.com/300x200'}" alt="${project.title}">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            `;
            projectsList.appendChild(projectItem);
        });
    }
}

function getDefaultData() {
    return {
        profilePic: 'https://via.placeholder.com/200x200',
        about: 'I am MD AFRID FOISAL OPU, a 2nd Semester CSE Student at IIUC. My focus areas include Cyber Security (learning), Web Development, and DSA.',
        skills: ['Cyber Security', 'Web Development', 'Data Structures & Algorithms', 'JavaScript', 'HTML', 'CSS'],
        projects: [
            {
                title: 'Blood for Life – Blood Bank Management Website',
                description: 'A comprehensive blood bank management system to connect donors with those in need.',
                image: 'https://via.placeholder.com/300x200'
            }
        ]
    };
}
