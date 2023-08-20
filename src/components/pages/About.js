import React from 'react';
import {
  FaFacebookF, FaGooglePlusG, FaGoogleDrive,
  FaTwitter, FaLinkedinIn, FaCircle,
} from 'react-icons/fa6';
import {
  Container, Row, Col, Nav, Table,
} from 'react-bootstrap';
import Tippy from '@tippyjs/react';
import story from '../../data/story';
import photo from '../../assets/photo.png';
import Footer from '../Footer';

const About = () => (
  <>
    <Container className="mt-4">
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
              <Col className="d-flex justify-content-center align-items-center">
                <div className="position-relative">
                  <img src={photo} alt="Profile" className="img-fluid custom-photo" />
                  <div className="social-media-overlay">
                    <Tippy content="Say Hello On Facebook">
                      <Nav.Link href="https://www.facebook.com/your_facebook_profile_url" target="_blank">
                        <FaFacebookF className="iconSize" />
                      </Nav.Link>
                    </Tippy>
                    <Nav.Link href="https://www.google.com/your_google_plus_profile_url" target="_blank">
                      <FaGooglePlusG className="iconSize" />
                    </Nav.Link>
                    <Tippy content="Say Hello On LinkedIn">
                      <Nav.Link href="https://www.linkedin.com/your_linkedin_profile_url" target="_blank">
                        <FaLinkedinIn className="iconSize" />
                      </Nav.Link>
                    </Tippy>
                    <Nav.Link href="https://www.google.com/your_google_drive_url" target="_blank">
                      <FaGoogleDrive className="iconSize" />
                    </Nav.Link>
                    <Tippy content="Say Hello On Twitter">
                      <Nav.Link href="https://www.twitter.com/your_twitter_profile_url" target="_blank">
                        <FaTwitter className="iconSize" />
                      </Nav.Link>
                    </Tippy>
                  </div>
                </div>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="pb-5 background mt-4 boxshadowCode ">
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
              <div className="scrollable">
                <h5 className="sticky-top text-center">ABOUT ME</h5>
                {story}

              </div>
            </div>
          </Col>
        </Row>
      </Container>
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
              <div className="scrollable">
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
                  Ensuring the quality of source code and conducting code and UI reviews.
                  Review codes written by software development students in GitHub.
                  Evaluate code clarity, style, and best practices on project Pull Requests.
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
                <p>
                  Mentoring multiple junior web developers and providing technical support
                  through many code reviews. Providing advice and tips on maintaining
                  motivation to maintain longevity in the program.
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
                  Filling my communication and problem-solving skills in a high-stress,
                  fast-paced environment. Reduced time and cost on maintenance services by
                  task prioritization and concise scheduling. I achieved the best employee
                  award three times for maintaining a good customer relationship and
                  technical skills.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

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
              <div className="scrollable">
                <Table>
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
                      <td>GitHub, GitLab, Google Chrome Dev Tools, Slack, Visual Studio Code</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="text-center" style={{ backgroundColor: '#0a4275', color: 'white' }}>
                        <h5>Soft Skills</h5>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        Remote, Asynchronous, Cross-cultural, International, Global
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        Project Management, Problem-solving, Time Management, Attention to detail,
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        Creativity, Collaboration, Results-oriented, Pair Programming
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

    </Container>
    <Footer />
  </>
);

export default About;
