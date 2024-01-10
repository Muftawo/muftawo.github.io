function fetchAndUpdateContent(elementId, filePath) {
  const container = document.getElementById(elementId);
  fetch(filePath)
      .then(response => response.text())
      .then(html => container.innerHTML = html);
}

function handleNavigation(event) {
  const target = event.target;
  const navLink = target.dataset.navLink;

  if (navLink) {
      fetchAndUpdateContent('mainContentContainer', navLink);
  }
}

// Array of content containers and their corresponding file paths
const contentContainers = [
  { id: 'sidebarContainer', path: './sidebar.html' },
  { id: 'navbarContainer', path: './navbar.html' },
  { id: 'aboutContainer', path: './pages/about.html' },
  { id: 'resumeContainer', path: './pages/resume.html' },
  { id: 'portfolioContainer', path: './pages/portfolio.html' }
  // Add more as needed
];

// Add click event listener to handle navigation
document.addEventListener('click', handleNavigation);

// Fetch and update content for each container
contentContainers.forEach(container => {
  fetchAndUpdateContent(container.id, container.path);
});
