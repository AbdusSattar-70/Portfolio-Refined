import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  FaGithub, FaArrowUpRightFromSquare, FaHandsHoldingCircle, FaCircleUser,
} from 'react-icons/fa6';
import Tippy from '@tippyjs/react';
import projectInfo from '../../data/projectInfo';
import projectInfo2 from '../../data/projectInfo2';

const RecentWork = () => {
  const [showSecondProjects, setShowSecondProjects] = useState(false);

  const visibleProjects = showSecondProjects ? projectInfo2 : projectInfo;

  const handleToggleProjects = () => {
    setShowSecondProjects(!showSecondProjects);
  };

  return (
    <>
      <div className="projectCard">
        <div className="sticky-button-container">
          <button
            type="button"
            className={`button showprojectBtn ${showSecondProjects ? 'flipped' : ''}`}
            onClick={handleToggleProjects}
          >
            {showSecondProjects ? 'Toggle Highlighted Projects' : 'Toggle Console Projects'}
          </button>
        </div>
        {visibleProjects.map((project) => (
          <div key={project.id}>
            <Row className="border boxshadowRecent projectImg ">
              <Col md={4} className="mx-0 px-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="d-block w-100 h-100 projectImg"
                />
              </Col>
              <Col md={8} className="p-4 bgCard">
                <div>
                  <h5>
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
                      {' '}
                    </span>
                    <span className="collaborator-list">
                      <span className="collaborator-name">
                        <FaCircleUser className="iconSize" />
                        {project.collaborator[0]}
                      </span>
                      {project.collaborator.slice(1).map((name) => (
                        <Tippy content={name} key={uuid()}>
                          <span className="collaborator-name">
                            <FaCircleUser className="iconSize" />
                          </span>
                        </Tippy>
                      ))}
                    </span>
                  </h5>
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
                  {project.link === 'not deployed' ? (
                    <Tippy content="This project is not yet deployed.
                     You can clone the repository to explore its functionality locally."
                    >
                      <button type="button" className="button modalBtn m-2">
                        <FaArrowUpRightFromSquare />
                        {' '}
                        See Live
                      </button>
                    </Tippy>
                  ) : (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <button type="button" className="button modalBtn m-2">
                        <FaArrowUpRightFromSquare />
                        {' '}
                        See Live
                      </button>
                    </a>
                  )}

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
          </div>
        ))}

      </div>
    </>
  );
};

export default RecentWork;
