// Sample project data
const projects = {
    project1: {
        title: "Machine Learning Model",
        content: `
            <img src="project1-full.jpg" alt="Project 1 Details" style="width:100%; max-height:400px; object-fit:cover;">
            <h3>Predictive Analytics Solution</h3>
            <p>Detailed description of the machine learning project...</p>
            <ul>
                <li>Technology used: Python, TensorFlow</li>
                <li>Data processing pipeline</li>
                <li>Model accuracy: 95%</li>
            </ul>
        `
    },
    project2: {
        title: "Data Visualization Tool",
        content: `
            <img src="project2-full.jpg" alt="Project 2 Details" style="width:100%; max-height:400px; object-fit:cover;">
            <h3>Interactive Dashboard Development</h3>
            <p>Details about the data visualization project...</p>
            <ul>
                <li>Technology used: Tableau, D3.js</li>
                <li>Real-time data updates</li>
                <li>User-friendly interface</li>
            </ul>
        `
    }
};

function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    modal.style.display = "block";
    modalTitle.textContent = projects[projectId].title;
    modalContent.innerHTML = projects[projectId].content;
}

function closeModal() {
    document.getElementById('projectModal').style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Close modal with ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
