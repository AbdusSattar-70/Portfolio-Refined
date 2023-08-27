import React from 'react';
import {
  FaFacebookF, FaTwitter, FaLinkedinIn, FaCircle, FaAngellist, FaGithub,
} from 'react-icons/fa6';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tippy from '@tippyjs/react';
import story from '../../data/story';
import photo from '../../assets/photo.webp';
import Footer from '../Footer';
import '../../codebase.css';

const About = () => (
  <>
    <Container className="">
      <div className="navigatebg">
        <div className="p-4">
          <Container className="pb-5 background boxshadowCode ">
            <h2 className="mb-1">
              <FaCircle className="red" />
              {' '}
              <FaCircle className="yellow" />
              {' '}
              <FaCircle className="green" />
            </h2>
            <Row>
              <Col className="mx-0 px-0">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="boxshadow ">
                    <h2>A Quick Look at Me</h2>
                    <p>
                      I&apos;m a software engineer from the lively
                      city of
                      <a href="https://en.wikipedia.org/wiki/Mymensingh" target="_blank" rel="noreferrer">
                        <span className="text-warning"> Mymensingh, Bangladesh. </span>
                      </a>
                      I&apos;m 33 years old, and I&apos;ve got an interesting blend of
                      passions that I&apos;d love to share.
                    </p>
                    <p>
                      Besides my tech side, I groove to music, get lost in detective movies,
                      and dive into adventure films and chess games.
                      And here&apos;s the twist—I&apos;m all about sharing what I know,
                      whether it&apos;s
                      <a href="/Portfolio-Refined/about#Mentor">
                        <span className="text-warning"> Mentoring </span>
                      </a>
                      or firing up positivity in the community.
                    </p>
                    <p>
                      But hang on, This, my friends, is just a sneak peek! If you&apos;re curious
                      to know more about my
                      <a href="/Portfolio-Refined/about#experience">
                        <span className="text-warning"> experiences </span>
                      </a>
                      ,
                      <a href="/Portfolio-Refined/about#skills">
                        <span className="text-warning"> skills </span>
                      </a>
                      , and
                      <a href="/Portfolio-Refined/about#story">
                        <span className="text-warning"> stories </span>
                      </a>
                      ,
                      come along on this online journey with me.
                    </p>
                    <hr className="cursorEffect" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="headlineBg">
        <div className="p-4">
          <Container className="pb-5 background boxshadowCode">
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
                  <Col className="d-flex justify-content-center align-items-center">
                    <div className="position-relative">
                      <img src={photo} alt="Profile" className="img-fluid custom-photo" />
                      <div className="social-media-overlay">
                        <Tippy content="Say Hello On Facebook">
                          <Nav.Link href="https://web.facebook.com/abdus.sattar.70/" target="_blank" aria-label="Visit my Facebook profile">
                            <FaFacebookF className="iconSize" />
                          </Nav.Link>
                        </Tippy>

                        <Tippy content="Say Hello On LinkedIn">
                          <Nav.Link href="https://www.linkedin.com/in/abdus-sattar70/" target="_blank" aria-label="Visit my LinkedIn profile">
                            <FaLinkedinIn className="iconSize" />
                          </Nav.Link>
                        </Tippy>

                        <Tippy content="Say Hello On Twitter">
                          <Nav.Link href="https://www.linkedin.com/in/abdus-sattar70/" target="_blank" aria-label="Visit my Twitter profile">
                            <FaTwitter className="iconSize" />
                          </Nav.Link>
                        </Tippy>
                        <Tippy content="Say Hello On Wellfound">
                          <Nav.Link href="https://wellfound.com/u/abdus-sattar70" target="_blank" aria-label="Visit my Wellfound profile">
                            <FaAngellist className="iconSize" />

                          </Nav.Link>
                        </Tippy>
                        <Tippy content="Find Me On GitHub">
                          <Nav.Link href="https://github.com/AbdusSattar-70/" target="_blank" aria-label="Visit my GitHub profile">
                            <FaGithub className="iconSize" />
                          </Nav.Link>
                        </Tippy>
                      </div>
                    </div>
                  </Col>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="navigatebg">
        <div className="p-4">
          <Container className="pb-5 background boxshadowCode ">
            <h2 className="mb-1">
              <FaCircle className="red" />
              {' '}
              <FaCircle className="yellow" />
              {' '}
              <FaCircle className="green" />
            </h2>
            <Row id="story">
              <Col className="mx-0 px-0">
                <div className="code-block">
                  <div className="scrollable boxshadow">
                    {story}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="headlineBg">
        <div className="p-4">
          <Container className="pb-5 background boxshadowCode ">
            <h2 className="mb-1">
              <FaCircle className="red" />
              {' '}
              <FaCircle className="yellow" />
              {' '}
              <FaCircle className="green" />
            </h2>
            <Row id="experience">
              <Col className="mx-0 px-0">
                <div className="code-block">
                  <div className="scrollable boxshadow">
                    <h5 className="sticky-top text-center">EXPERIENCES</h5>
                    <p>
                      <strong>
                        <a href="https://www.microverse.org" className="comLink" target="_blank" rel="noopener noreferrer">
                          MICROVERSE, Remote
                        </a>
                      </strong>
                      <br />
                      <strong>Code Reviewer · Part-time</strong>
                      <br />
                      May 2023 - Present
                    </p>
                    <p>
                      ■ Enhance code quality by providing actionable recommendations resulting in a
                      70% reduction in code-related issues.
                    </p>
                    <p>
                      ■ Evaluate code clarity, style, and best practices on project Pull Requests,
                      contributing to a 55% improvement in overall code readability.
                    </p>
                    <p>
                      <strong>
                        <a href="https://www.microverse.org" className="comLink" target="_blank" rel="noopener noreferrer">
                          MICROVERSE, Remote
                        </a>
                      </strong>
                      <br />
                      <strong>Mentor (Volunteer)</strong>
                      <br />
                      January 2023 – Present
                    </p>
                    <p id="Mentor">
                      ■ Mentor a group of 25 junior web developers, offering technical and
                      professional support through code reviews and Zoom calls.
                    </p>
                    <p>
                      ■ Provide advice and tips for maintaining motivation and longevity in the
                      program, resulting in a notable 95% increase in their program completion rate.
                    </p>
                    <p>
                      <strong>
                        <a href="http://www.reb.gov.bd/" className="comLink" target="_blank" rel="noopener noreferrer">
                          Bangladesh Rural Electrification Board, Dhaka, Bangladesh
                        </a>
                      </strong>
                      <br />
                      <strong>Line Technician</strong>
                      <br />
                      June 2008 – January 2020
                    </p>
                    <p>
                      ■ Calmed individuals during blackouts and resolved 15-20 daily
                      complaints using problem-solving and convincing skills.
                    </p>
                    <p>
                      ■ Received the Best Employee award thrice for maintaining customer
                      relationships, technical expertise, and consistently working without a weekly
                      day off.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="navigatebg">
        <div className="p-4">
          <Container className="pb-5 background boxshadowCode ">
            <h2 className="mb-1">
              <FaCircle className="red" />
              {' '}
              <FaCircle className="yellow" />
              {' '}
              <FaCircle className="green" />
            </h2>
            <Row id="skills">
              <Col className="mx-0 px-0">
                <div className="code-block">
                  <div className="scrollable ">
                    <Table className="boxshadow">
                      <thead>
                        <tr>
                          <td colSpan="2" className="text-center">
                            <h5>Technical Skills</h5>
                          </td>
                        </tr>
                        <tr>
                          <th className="text-center">Category</th>
                          <th className="text-center">Technology</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Programming Languages</td>
                          <td>Ruby, JavaScript</td>
                        </tr>
                        <tr>
                          <td>Programming Fundamentals</td>
                          <td>Object-oriented programming, Data structures, Algorithms</td>
                        </tr>
                        <tr>
                          <td>Libraries & Frameworks</td>
                          <td>React, Redux, Ruby on Rails, Bootstrap</td>
                        </tr>
                        <tr>
                          <td>Testing and Quality Assurance</td>
                          <td>
                            TDD, BDD, RSpec, Capybara, Jest,Unit testing, Integration
                            testing, System testing
                          </td>
                        </tr>
                        <tr>
                          <td>DevOps and Deployment</td>
                          <td>CI/CD</td>
                        </tr>
                        <tr>
                          <td>Web Development</td>
                          <td>HTML5, CSS3, Figma, HTTP(S) and REST</td>
                        </tr>
                        <tr>
                          <td>Database Management</td>
                          <td>SQL, PostgreSQL</td>
                        </tr>
                        <tr>
                          <td>Operating Systems</td>
                          <td>Windows</td>
                        </tr>
                        <tr>
                          <td>Version Control</td>
                          <td>Git</td>
                        </tr>
                        <tr>
                          <td>Software Development Methodologies</td>
                          <td>Agile, Kanban</td>
                        </tr>
                        <tr>
                          <td>Developer Tools</td>
                          <td>GitHub, GitLab, Postman, Chrome Dev Tool, Slack, VS Code</td>
                        </tr>
                        <tr>
                          <td colSpan="2" className="text-center" style={{ backgroundColor: '#0a4275', color: 'white' }}>
                            <h5>Soft Skills</h5>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="2">
                            Organizing,self-belief,Resilience ,Determination,Adaptability
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="2">
                            Project Management, Problem-solving,
                            Time Management, Attention to detail,
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="2">
                            Remote, Asynchronous, Cross-cultural,
                            Results-oriented, Pair Programming,
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Container>
    <Footer />
  </>
);

export default About;
