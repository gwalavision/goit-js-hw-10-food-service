
const theme = document.querySelector('#theme-switch-toggle');


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (localStorage.getItem('theme')) {
  document.body.className = localStorage.getItem('theme');
  theme.checked = localStorage.getItem('theme') === Theme.LIGHT ? false : true;
} else {
  localStorage.setItem('theme', Theme.LIGHT);
}

function changeTheme(event) {
  const theme = localStorage.getItem('theme') === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
  document.body.className = theme;
  localStorage.setItem('theme', theme);
}

theme.addEventListener('change', changeTheme);