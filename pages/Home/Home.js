import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>Hola, mi nombre es</p>
    <h1>Joao Costa </h1>
    <p>Soy un estudiante de DAW (Desarrollo de Aplicaciones Web) y en este portafolio puedes encontrar proyectos personales y académicos que demuestran mi habilidad para diseñar, crear y implementar aplicaciones web interactivas y efectivas.
    A continuación, te presento algunos de mis proyectos más destacados, donde podrás ver mi trabajo en áreas como  HTML5, CSS3, JavaScript, frameworks como React o Angular, bases de datos y sistemas de gestión de contenido.
    Espero que disfrutes navegando por este portafolio y que puedas ver mi progreso como desarrollador web.</p>
    <a href="mailto:miguel-cds@hotmail.com">Escribeme! →</a>
    </section>`;
};
