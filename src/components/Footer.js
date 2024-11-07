import React from 'react';
import {
  FaFacebookF, FaLinkedinIn, FaGithub, FaAngellist, FaRegEnvelope,
} from 'react-icons/fa';
import Tippy from '@tippyjs/react';

const Footer = () => (
  <section>
    <footer className="text-center text-white" style={{ backgroundColor: '#090580' }}>
      <div className="container p-4 pb-0">
        <section>
          <p className="d-flex justify-content-center align-items-center">
            <span className="me-3">
              Connect with me:
            </span>
            <a href="https://web.facebook.com/abdus.sattar.70/" target="_blank" rel="noopener noreferrer" aria-label="Visit my Facebook profile">
              <FaFacebookF className="text-white iconSize me-3" />
            </a>

            <a href="https://www.linkedin.com/in/abdus-sattar70/" target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn profile">
              <FaLinkedinIn className="text-white iconSize me-3" />
            </a>
            <a href="https://wellfound.com/u/abdus-sattar70" target="_blank" rel="noopener noreferrer" aria-label="Visit my Wellfound profile">
              <FaAngellist className="text-white iconSize me-3" />
            </a>
            <a href="https://github.com/AbdusSattar-70/" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile">
              <FaGithub className="text-white iconSize me-3" />
            </a>
            <Tippy content="sasorganicagro@gmail.com">
              <a href="mailto:sasorganicagro@gmail.com" aria-label="Visit my gmail profile">
                <FaRegEnvelope className="text-white iconSize me-3" />
              </a>
            </Tippy>
          </p>
        </section>
      </div>
      <div className="text-center p-3 footerFont" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <span>Copyright © </span>
        <a className="text-white footerFont" target="_blank" href="https://github.com/AbdusSattar-70/portfolio/blob/master/LICENSE" rel="noreferrer">Abdus Sattar</a>
        <span> 2023 All rights Reserved</span>
      </div>
    </footer>
  </section>
);

export default Footer;
