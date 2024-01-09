// Use JavaScript to dynamically include sidebar.html
const sidebarContainer = document.getElementById('sidebarContainer');
fetch('./sidebar.html')
    .then(response => response.text())
    .then(html => sidebarContainer.innerHTML = html);