function showSection(section) {
    const available = document.getElementById('available-section');
    const applied = document.getElementById('applied-section');
    const buttons = document.querySelectorAll('.tab-btn');

    if (section === 'available') {
        available.style.display = 'block';
        applied.style.display = 'none';
        buttons[0].classList.add('active');
        buttons[1].classList.remove('active');
    } else {
        available.style.display = 'none';
        applied.style.display = 'block';
        buttons[1].classList.add('active');
        buttons[0].classList.remove('active');
    }
}

function applyJob(button, jobTitle) {
    button.innerText = "Applied!";
    button.style.background = "#ccc";
    button.disabled = true;

    const emptyMsg = document.getElementById('no-applied-message');
    if(emptyMsg) emptyMsg.style.display = 'none';

    const container = document.getElementById('applied-container');
    const jobDiv = document.createElement('div');
    jobDiv.className = 'job-card';
    
    const statuses = [
        {text: 'Accepted', class: 'status-accepted'},
        {text: 'Application Sent', class: 'status-pending'}
    ];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

    jobDiv.innerHTML = `
        <div class="job-info">
            <h3>${jobTitle}</h3>
            <p class="details">Applied just now</p>
        </div>
        <span class="status-badge ${randomStatus.class}">${randomStatus.text}</span>
    `;
    
    container.appendChild(jobDiv);
    alert(`Yay! You've successfully applied for ${jobTitle}. Good luck!`);
}