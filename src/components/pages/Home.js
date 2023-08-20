import React from 'react';
import {
  FaFacebookF, FaAngellist, FaGithub,
  FaTwitter, FaLinkedinIn, FaCircle,
} from 'react-icons/fa6';
import {
  Container, Row, Col,
  Nav,
} from 'react-bootstrap';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
// import ProjectCards from '../ProjectCards';
import Footer from '../Footer';
import Codebase from './Codebase';

const Home = () => (
  <>
    <div>
      <Container className="pb-5 background mt-4 boxshadowCode">
        <h2 className="mb-1">
          <FaCircle className="red" />
          {' '}
          <FaCircle className="yellow" />
          {' '}
          <FaCircle className="green" />
        </h2>
        <Row>
          <Col className="mx-0 px-0">
            <div className="code-block">
              <div className="col-12 text-center welcomePanel">
                <h1 className="Welcome"> Welcome Back!</h1>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="boxshadow ">
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
                  I can help you build a product, feature or
                  website Look through some of my work and experience! If you like
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

                </div>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
      <Codebase />
    </div>
    <Footer />
  </>
);
export default Home;
