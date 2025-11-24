// Function to toggle between light and dark themes
 export function toggleTheme() {
const themeToggleBtn = document.getElementById('theme-toggle-checkbox');
const Themeicon = document.getElementById('logo');
const body = document.body;

  body.classList.toggle('dark-theme');
    // Optionally, you can change the icon based on the theme
    if (body.classList.contains('dark-theme')) {
        Themeicon.src = 'assets/logo-dark.svg';
    } else {
        Themeicon.src = 'assets/logo-light.svg';
    }
    
// Event listener for the theme toggle button
themeToggleBtn.addEventListener('change', toggleTheme);
}

