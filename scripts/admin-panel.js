// Admin Panel Script
document.addEventListener('DOMContentLoaded', function() {
    // Check if admin is logged in
    if (!localStorage.getItem('adminLoggedIn')) {
        window.location.href = 'index.html';
    }

    // Tab switching
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(tabName + '-tab').classList.add('active');
        });
    });

    // Logout
    document.getElementById('logout-btn').addEventListener('click', function() {
        localStorage.removeItem('adminLoggedIn');
        window.location.href = 'index.html';
    });

    // Load existing data
    loadData();

    // Profile picture update
    document.getElementById('update-profile-pic').addEventListener('click', function() {
        const fileInput = document.getElementById('profile-pic-input');
        if (fileInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const data = JSON.parse(localStorage.getItem('portfolioData') || '{}');
                data.profilePic = e.target.result;
                localStorage.setItem('portfolioData', JSON.stringify(data));
                alert('Profile picture updated!');
            };
            reader.readAsDataURL(fileInput.files[0]);
        }
    });

    // About me update
    document.getElementById('update-about').addEventListener('click', function() {
        const aboutText = document.getElementById('about-text').value;
        const data = JSON.parse(localStorage.getItem('portfolioData') || '{}');
        data.about = aboutText;
        localStorage.setItem('portfolioData', JSON.stringify(data));
        alert('About me updated!');
    });

    // Skills update
    document.getElementById('add-skill').addEventListener('click', function() {
        const skillsInputs = document.getElementById('skills-inputs');
        const newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.className = 'skill-input';
        newInput.placeholder = `Skill ${skillsInputs.children.length + 1}`;
        skillsInputs.appendChild(newInput);
    });

    document.getElementById('update-skills').addEventListener('click', function() {
        const skillInputs = document.querySelectorAll('.skill-input');
        const skills = Array.from(skillInputs).map(input => input.value).filter(skill => skill.trim() !== '');
        const data = JSON.parse(localStorage.getItem('portfolioData') || '{}');
        data.skills = skills;
        localStorage.setItem('portfolioData', JSON.stringify(data));
        alert('Skills updated!');
    });

    // Projects update
    document.getElementById('add-project').addEventListener('click', function() {
        const projectsInputs = document.getElementById('projects-inputs');
        const newProject = document.createElement('div');
        newProject.className = 'project-input';
        newProject.innerHTML = `
            <input type="text" class="project-title" placeholder="Project Title">
            <textarea class="project-description" rows="3" placeholder="Project Description"></textarea>
            <input type="file" class="project-image" accept="image/*">
        `;
        projectsInputs.appendChild(newProject);
    });

    document.getElementById('update-projects').addEventListener('click', function() {
        const projectInputs = document.querySelectorAll('.project-input');
        const projects = Array.from(projectInputs).map(project => {
            const title = project.querySelector('.project-title').value;
            const description = project.querySelector('.project-description').value;
            const imageFile = project.querySelector('.project-image').files[0];

            if (title && description) {
                return { title, description, image: imageFile ? URL.createObjectURL(imageFile) : '' };
            }
            return null;
        }).filter(project => project !== null);

        const data = JSON.parse(localStorage.getItem('portfolioData') || '{}');
        data.projects = projects;
        localStorage.setItem('portfolioData', JSON.stringify(data));
        alert('Projects updated!');
    });

    function loadData() {
        const data = JSON.parse(localStorage.getItem('portfolioData') || '{}');

        // Load about text
        if (data.about) {
            document.getElementById('about-text').value = data.about;
        }

        // Load skills
        if (data.skills) {
            const skillsInputs = document.getElementById('skills-inputs');
            skillsInputs.innerHTML = '';
            data.skills.forEach(skill => {
                const input = document.createElement('input');
                input.type = 'text';
                input.className = 'skill-input';
                input.value = skill;
                skillsInputs.appendChild(input);
            });
        }

        // Load projects
        if (data.projects) {
            const projectsInputs = document.getElementById('projects-inputs');
            projectsInputs.innerHTML = '';
            data.projects.forEach(project => {
                const projectDiv = document.createElement('div');
                projectDiv.className = 'project-input';
                projectDiv.innerHTML = `
                    <input type="text" class="project-title" value="${project.title}">
                    <textarea class="project-description" rows="3">${project.description}</textarea>
                    <input type="file" class="project-image" accept="image/*">
                `;
                projectsInputs.appendChild(projectDiv);
            });
        }
    }
});
