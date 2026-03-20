import "./Navbar.css";

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    themeBtn.innerText = document.body.classList.contains("light") ? "☾" : "☀";
  });
};

export const Navbar = () => `
<nav>
  <a href="#" id="homelink" class="nav-logo">JM<span>Costa</span></a>
  <ul>
    <li><a href="#" id="homelink-nav">Home</a></li>
    <li><a href="#" id="projectslink">Projects</a></li>
    <li><button id="themeBtn" aria-label="Cambiar tema">☀</button></li>
  </ul>
</nav>
`;
