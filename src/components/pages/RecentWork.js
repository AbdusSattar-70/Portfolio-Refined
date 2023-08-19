import React from 'react';
import { v4 as uuid } from 'uuid';
import { Row, Col } from 'react-bootstrap';
import {
  FaGithub, FaArrowUpRightFromSquare, FaHandsHoldingCircle, FaCircleUser,
} from 'react-icons/fa6';
import projectInfo from '../../data/projectInfo';
import Footer from '../Footer';

const RecentWork = () => {
  if (!projectInfo || projectInfo.length === 0) {
    return <div>No projects found.</div>;
  }

  return (
    <>
      <div className="projectCard ">
        {projectInfo.map((project) => (
          <div key={project.id}>
            <Row className="border boxshadowRecent projectImg">
              <Col md={4} className="mx-0 px-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="d-block w-100 h-100 projectImg"
                />
              </Col>
              <Col md={8} className="p-4 bgCard">
                <div>
                  <h6>
                    {project.title}
                    {' '}
                    <span>
                      <FaHandsHoldingCircle className="iconSize" />
                      {' '}
                      <span className="fs-6">
                        {project.made}
                      </span>
                      {' '}
                      By
                    </span>
                    {project.collaborator.map((name) => (
                      <span key={uuid()} className="m-2 fs-6">
                        <FaCircleUser className="iconSize" />
                        {name}
                      </span>
                    ))}
                  </h6>
                  <p>{project.description}</p>
                  <ul className="techList d-flex flex-wrap justify-content-between">
                    {project.technologies.map((tech) => (
                      <li key={uuid()} className="techStyle">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="d-flex justify-content-between flex-wrap">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button type="button" className="button modalBtn m-2">
                      <FaArrowUpRightFromSquare />
                      {' '}
                      See Live
                    </button>
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <button type="button" className="button modalBtn modalBtnWhite m-2">
                      <FaGithub />
                      {' '}
                      Source
                    </button>
                  </a>
                </div>
              </Col>
            </Row>
            <div className="displayNone">
              <p>display none</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default RecentWork;
