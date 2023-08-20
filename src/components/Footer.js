import React from 'react';
import {
  FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaAngellist,
} from 'react-icons/fa';

const Footer = () => (
  <section>
    <footer className="text-center text-white" style={{ backgroundColor: '#0a4275' }}>
      <div className="container p-4 pb-0">
        <section>
          <p className="d-flex justify-content-center align-items-center">
            <span className="me-3">
              Connect with me:
            </span>
            <a href="https://web.facebook.com/abdus.sattar.70/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-white iconSize me-3" />
            </a>
            <a href="https://www.linkedin.com/in/abdus-sattar70/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white iconSize me-3" />
            </a>

            <a href="https://www.linkedin.com/in/abdus-sattar70/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-white iconSize me-3" />
            </a>
            <a href="https://wellfound.com/u/abdus-sattar70" target="_blank" rel="noopener noreferrer">
              <FaAngellist className="text-white iconSize me-3" />
            </a>
            <a href="https://github.com/AbdusSattar-70/" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white iconSize me-3" />
            </a>
          </p>
        </section>
      </div>
      <div className="text-center p-3 fs-6" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className="text-white fs-6" target="_blank" href="https://github.com/AbdusSattar-70/portfolio/blob/master/LICENSE" rel="noreferrer">Abdus Sattar</a>
      </div>
    </footer>
  </section>
);

export default Footer;
