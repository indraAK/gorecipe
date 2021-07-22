import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import logo from "../images/logo.svg";

const Footer = () => {
  return (
    <footer>
      <a href="/" className="brand">
        <img src={logo} alt="Logo" className="brand-img" />
        gorecipe
      </a>
      <ul className="scm-list">
        <li>
          <a
            className="scm-icon"
            href="https://facebook.com/people/Indra-Adi-Kusuma/100009019826862/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaFacebook />
          </a>
        </li>
        <li>
          <a
            className="scm-icon"
            href="https://www.instagram.com/mrx.indra/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            className="scm-icon"
            href="https://github.com/indraAK"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub />
          </a>
        </li>
      </ul>
      <p className="copyright-text">
        <small>&copy; Copyright 2021 gorecipe</small>
      </p>
    </footer>
  );
};

export default Footer;
