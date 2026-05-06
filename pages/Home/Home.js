import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home fade-in-up">

      <div class="hero">
        <div class="hero-text">
          <span class="hero-tag">Desarrollador Web Full Stack</span>
          <h1>Joao Miguel<br>Costa Da Silva</h1>
          <p class="hero-desc">
            Graduado en DAW, con formacion y proyectos realizados para <strong>Mercanza</strong>.
            Creo interfaces web modernas, responsive y eficientes con tecnologías actuales.
          </p>
          <div class="hero-cta">
            <button class="btn-primary" onclick="document.querySelector('#projectslink').click()">Ver Proyectos</button>
            <a href="mailto:miguel-cds@hotmail.com" class="btn-secondary">Contáctame</a>
          </div>
        </div>
        <div class="hero-photo">
          <img src="/Profile2.1.png" alt="Joao Miguel Costa Da Silva" />
        </div>
      </div>

      <div class="skills-section">
        <p class="section-label">Tech Stack</p>
        <div class="carousel-wrapper">
          <div class="carousel-fade-left"></div>
          <div class="carousel-fade-right"></div>
          <div class="carousel-track">
            <div class="carousel-item" style="--glow:#e34f26"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" /><span>HTML5</span></div>
            <div class="carousel-item" style="--glow:#1572b6"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" /><span>CSS3</span></div>
            <div class="carousel-item" style="--glow:#f7df1e"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" /><span>JavaScript</span></div>
            <div class="carousel-item" style="--glow:#61dafb"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" /><span>React</span></div>
            <div class="carousel-item" style="--glow:#dd0031"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" /><span>Angular</span></div>
            <div class="carousel-item" style="--glow:#339933"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" /><span>Node.js</span></div>
            <div class="carousel-item" style="--glow:#4479a1"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" /><span>SQL</span></div>
            <div class="carousel-item" style="--glow:#f05032"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" /><span>Git</span></div>
            <div class="carousel-item" style="--glow:#646cff"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt="Vite" /><span>Vite</span></div>
            <div class="carousel-item" style="--glow:#47a248"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" /><span>MongoDB</span></div>
            <div class="carousel-item" style="--glow:#f89820"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" /><span>Java</span></div>
            <div class="carousel-item" style="--glow:#3776ab"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" /><span>Python</span></div> 
            <!-- Duplicado para loop infinito -->
            <div class="carousel-item" style="--glow:#e34f26"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" /><span>HTML5</span></div>
            <div class="carousel-item" style="--glow:#1572b6"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" /><span>CSS3</span></div>
            <div class="carousel-item" style="--glow:#f7df1e"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" /><span>JavaScript</span></div>
            <div class="carousel-item" style="--glow:#61dafb"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" /><span>React</span></div>
            <div class="carousel-item" style="--glow:#dd0031"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" /><span>Angular</span></div>
            <div class="carousel-item" style="--glow:#339933"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" /><span>Node.js</span></div>
            <div class="carousel-item" style="--glow:#4479a1"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" /><span>SQL</span></div>
            <div class="carousel-item" style="--glow:#f05032"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" /><span>Git</span></div>
            <div class="carousel-item" style="--glow:#646cff"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt="Vite" /><span>Vite</span></div>
            <div class="carousel-item" style="--glow:#47a248"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" /><span>MongoDB</span></div>
            <div class="carousel-item" style="--glow:#f89820"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" /><span>Java</span></div>
            <div class="carousel-item" style="--glow:#3776ab"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" /><span>Python</span></div>
            
          </div>
        </div>
      </div>

      <div class="about-section">
        <div class="about-text">
          <p class="section-label">Sobre mí</p>
          <h2>Pasión por el desarrollo web</h2>
          <p>Desarrollador web graduado en CFGS en DAW, he desarrollado mi formación y proyectos en <strong>Mercanza</strong>. Me especializo en frontend moderno con React, con conocimientos sólidos en backend, datos y visualización.</p>
          <p>Orientado a escribir código limpio, accesible y escalable. Siempre aprendiendo y aplicando nuevas tecnologías en proyectos reales.</p>
          <div class="languages">
            <span class="lang-badge">🇪🇸 Español</span>
            <span class="lang-badge">🇵🇹 Portugués</span>
            <span class="lang-badge">🇬🇧 Inglés B1</span>
          </div>
        </div>
        <div class="about-experience">
          <div class="exp-card">
            <span class="exp-year">2025 – 2026</span>
            <h4>Prácticas en Mercanza</h4>
            <p>Desarrollo web en entorno profesional real</p>
            <p>Procesamiento y limpieza de datos mediante Python y librerías como Pandas
            <p>Transformación de datos (ETL) para su análisis y visualización</p>
            <p>Generación de datasets preparados para visualización</p>
            <p>Creación de dashboards e informes en Power BI</p>
            <p>Análisis de datos para obtención de insights</p>
          </div>
          <div class="exp-card">
            <span class="exp-year">2024 – 2026</span>
            <h4>DAW – Desarrollo de Aplicaciones Web</h4>
          </div>
          <div class="exp-card">
            <span class="exp-year">2024 – 2026</span>
            <h4>Master - Full Stack Developer</h4>
            <p>Desarrollo web focalizado a tener unas bases sólidas en JavaScript, HTML y CSS</p>
            <p>Tambien en Entornos como React y TypeScript</p>
          </div>
        </div>
      </div>

    </section>`;

  const track = main.querySelector(".carousel-track");
  let position = 0;
  let paused = false;

  track.addEventListener("mouseenter", () => {
    paused = true;
  });
  track.addEventListener("mouseleave", () => {
    paused = false;
  });

  function tick() {
    if (!paused) {
      position -= 0.5;
      const halfWidth = track.scrollWidth / 2;
      if (position <= -halfWidth) position += halfWidth;
      track.style.transform = `translateX(${position}px)`;
    }
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
};
