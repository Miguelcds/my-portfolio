import "./Footer.css";

import {Button} from "../Button/Button";


export const Footer = () => `


<h2> <a href="mailto:miguel-cds@hotmail.com"> Contact </a> </h2>
<div>
${Button("/twitter.png", "Twitter")}
${Button("/githubb.png", "GitHub")}
${Button("/linkedin.png", "LinkedIn")}
${Button("/telegram.png", "Telegram")}
</div>
`;