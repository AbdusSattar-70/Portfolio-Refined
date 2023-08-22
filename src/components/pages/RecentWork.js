import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Row, Col } from 'react-bootstrap';
import {
  FaGithub, FaArrowUpRightFromSquare, FaHandsHoldingCircle, FaCircleUser,
} from 'react-icons/fa6';
import Tippy from '@tippyjs/react';
import projectInfo from '../../data/projectInfo';
import Footer from '../Footer';

const RecentWork = () => {
  const [visibleProjects, setVisibleProjects] = useState(10);
  const initialVisibleProjects = 10;
  const handleSeeMoreClick = () => {
    setVisibleProjects(projectInfo.length);
  };

  const handleShowLessClick = () => {
    setVisibleProjects(initialVisibleProjects);
  };

  if (!projectInfo || projectInfo.length === 0) {
    return <div>No projects found.</div>;
  }

  return (
    <>

      <div className="projectCard">
        {projectInfo.slice(0, visibleProjects).map((project) => (
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
                    <Tippy content="This project is not yet deployed. You can clone the repository to explore its functionality locally.">
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
            <div className="displayNone">
              <p>display none</p>
            </div>
          </div>
        ))}
      </div>
      {visibleProjects < projectInfo.length ? (
        <button
          type="button"
          className="button modalBtn m-2 sticky-top"
          onClick={handleSeeMoreClick}
        >
          See More
        </button>
      ) : (
        <button
          type="button"
          className="button modalBtn m-2 sticky-top"
          onClick={handleShowLessClick}
        >
          Show Less
        </button>
      )}
      <Footer />
    </>
  );
};

export default RecentWork;
