import "./Footer.css";

import {Button} from "../Button/Button";


export const Footer = () => `


<h2> <a href="mailto:miguel-cds@hotmail.com"> Contact </a> </h2>
<div>
${Button("/public/twitter.png", "Twitter")}
${Button("/public/githubb.png", "GitHub")}
${Button("/public/linkedin.png", "LinkedIn")}
${Button("/public/telegram.png", "Telegram")}
</div>
`;