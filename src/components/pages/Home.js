import React, { useState } from 'react';
import {
  FaFacebookF, FaAngellist, FaGithub, FaArrowRightLong, FaArrowLeftLong,
  FaTwitter, FaLinkedinIn, FaRegEnvelope,
} from 'react-icons/fa6';
import {
  Container, Row, Col,
  Nav,
} from 'react-bootstrap';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import ProjectCards from '../ProjectCards';

const Home = () => {
  const [showSecondProjects, setShowSecondProjects] = useState(false);

  return (
    <>
      <Container className="pb-5 headlineBg">
        <Row>
          <Col className="mx-0 px-0 ">
            <div className="d-flex justify-content-center align-items-center">
              <div className="headlinePadding">
                <h1>
                  Hey There,
                  <br />
                  I&apos;m
                  {' '}
                  <span className="text-primary">
                    {' '}
                    Abdus Sattar
                    {' '}
                    <span className="cursorEffect" />
                  </span>
                </h1>

                <h4>I&apos;m a Software Engineer from Bangladesh</h4>
                <p>
                  I can help you build a product, feature, or
                  website. Look through
                  <span>
                    {' '}
                    <a href="#project">
                      <span className="text-warning">
                        some of my work
                        {' '}
                      </span>
                    </a>
                  </span>
                  and
                  experience!
                  If you like
                  what you
                  see and have a project you need coded,
                  don&apos;t hesitate to contact me —
                  <span>
                    Looking To Start A Project?
                    {' '}
                    <Link to="/contact">
                      <span className="text-warning">Let&apos;s Talk</span>
                    </Link>
                  </span>
                </p>
                <div className="d-flex align-items-center justify-content-between p-3 social_media">
                  <Tippy content="Say Hello On Facebook">
                    <Nav.Link href="https://web.facebook.com/abdus.sattar.70/" target="_blank">
                      <FaFacebookF className="iconSize" />
                    </Nav.Link>
                  </Tippy>

                  <Tippy content="Say Hello On LinkedIn">
                    <Nav.Link href="https://www.linkedin.com/in/abdus-sattar70/" target="_blank">
                      <FaLinkedinIn className="iconSize" />
                    </Nav.Link>
                  </Tippy>

                  <Tippy content="Say Hello On Twitter">
                    <Nav.Link href="https://www.linkedin.com/in/abdus-sattar70/" target="_blank">
                      <FaTwitter className="iconSize" />
                    </Nav.Link>
                  </Tippy>
                  <Tippy content="Say Hello On Wellfound">
                    <Nav.Link href="https://wellfound.com/u/abdus-sattar70" target="_blank">
                      <FaAngellist className="iconSize" />
                    </Nav.Link>
                  </Tippy>
                  <Tippy content="Find Me On GitHub">
                    <Nav.Link href="https://github.com/AbdusSattar-70/" target="_blank">
                      <FaGithub className="iconSize" />
                    </Nav.Link>
                  </Tippy>
                  <Tippy content="sasorganicagro@gmail.com">
                    <a href="mailto:sasorganicagro@gmail.com">
                      <FaRegEnvelope className="iconSize" />
                    </a>
                  </Tippy>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="toggleProject container">
        <div className="toggleProjectPadding">
          <h3>Featured Work</h3>
          <p>
            While I often focus on contract work, I also venture into
            freelance opportunities and create projects for enjoyment.
            Below, I showcase a blend of my recently deployed projects
            and console-based creations designed for learning and fun. Explore and enjoy!
          </p>
          <button
            type="button"
            className={`button showprojectBtn ${showSecondProjects ? 'flipped' : ''}`}
            onClick={() => setShowSecondProjects(!showSecondProjects)}
          >
            {showSecondProjects ? 'Toggle Deployed Only' : 'Toggle Console Only'}
          </button>
        </div>
      </div>
      <div id="project" className="project-cards-container container">
        <ProjectCards showSecondProjects={showSecondProjects} />
      </div>
      <div className=" container px-0 navigatebg">
        <div className="d-flex justify-content-between navigatepadding">
          <a href="/about" rel="noopener noreferrer">
            <button type="button" className="button modalBtn">
              <FaArrowLeftLong />
              {' '}
              About me
            </button>
          </a>
          <a href="/contact" rel="noopener noreferrer">
            <button type="button" className="button modalBtn">
              Contact me
              {' '}
              <FaArrowRightLong />
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
