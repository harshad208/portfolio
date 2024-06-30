// scripts.js

// Placeholder for any future JavaScript functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio Loaded');
});


document.getElementById('sidebar-toggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('show');
});

function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    }
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}
