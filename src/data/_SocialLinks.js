import {  faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
    faIcon: faLinkedin,
    alt: "Linkedin",
    classname: 'fab fa-linkedin fa-fw',
    url: "https://www.linkedin.com/in/raghunath-sawant-19071994/",
  },
  {
    faIcon: faGithub,
    alt: "GitHub",
    url: "https://github.com/raghusawant786",
  },
  {
    faIcon: faFacebookSquare,
    alt: "Facebook",
    url: "https://www.facebook.com/raghunath.sawant/",
  },
  {
    faIcon: faEnvelope,
    alt: "Email",
    url: "mailto:raghusawant786@gmail.com",
  },
];

export default socialLinks;