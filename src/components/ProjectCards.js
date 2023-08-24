import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Row, Col } from 'react-bootstrap';
import {
  FaGithub, FaArrowUpRightFromSquare, FaXmark, FaHandsHoldingCircle, FaCircleUser,
} from 'react-icons/fa6';
import { v4 as uuid } from 'uuid';
import Tippy from '@tippyjs/react';
import projectInfo from '../data/projectInfo';
import projectInfo2 from '../data/projectInfo2';

const ProjectCards = ({ showSecondProjects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const visibleProjects = showSecondProjects ? projectInfo2 : projectInfo;

  return (
    <>

      <div className="projectCard">
        {visibleProjects.map((project, index) => (
          <div key={uuid()}>
            <button
              type="button"
              className={`projectCardBtn ${showSecondProjects ? 'project-info-2' : 'project-info'} ${index % 2 === 0 ? 'even' : 'odd'}`}
              onClick={() => openProjectModal(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="d-block w-100 h-100"
              />
              <h6>{project.title}</h6>
              <p>
                {project.description.substring(0, 50)}
                ...
              </p>
              <ul className="techList d-flex flex-wrap justify-content-between">
                {project.technologies.slice(0, 3).map((tech) => (
                  <li key={uuid()} className="techStyle">
                    {tech}
                  </li>
                ))}
                {project.technologies.length > 3 && (
                <li className="techStyle">
                  +
                  {project.technologies.length - 3}
                  {' '}
                  more
                </li>
                )}
              </ul>

            </button>
          </div>
        ))}

        <Modal
          show={!!selectedProject}
          onHide={closeProjectModal}
          dialogClassName="custom-modal"
        >
          {selectedProject && (
          <ProjectModalContent project={selectedProject} onClose={closeProjectModal} />
          )}
        </Modal>
      </div>
    </>

  );
};

const ProjectModalContent = ({ project, onClose }) => (
  <div>
    <Modal.Header className="border">
      <Modal.Title>
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
      </Modal.Title>
      <button type="button" onClick={onClose} className="humIcon">
        <FaXmark />
      </button>

    </Modal.Header>
    <Modal.Body>
      <div>
        <Row className="border">
          <Col md={4} className="mx-0 px-0">
            <img
              src={project.image}
              alt={project.title}
              className="d-block w-100 h-100 projectImg"
            />
          </Col>
          <Col md={8} className="p-4 bgCard">
            <div>
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
                  <button type="button" className="button modalBtn">
                    <FaArrowUpRightFromSquare />
                    {' '}
                    See Live
                  </button>
                </Tippy>
              ) : (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button type="button" className="button modalBtn">
                    <FaArrowUpRightFromSquare />
                    {' '}
                    See Live
                  </button>
                </a>
              )}

              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <button type="button" className="button modalBtn modalBtnWhite">
                  <FaGithub />
                  {' '}
                  Source
                </button>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </Modal.Body>
  </div>
);

ProjectModalContent.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    made: PropTypes.string.isRequired,
    collaborator: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

ProjectModalContent.defaultProps = {
  project: {
    title: '',
    image: '',
    description: '',
    technologies: [],
    link: '',
    github: '',
  },
};

ProjectCards.propTypes = {
  showSecondProjects: PropTypes.bool.isRequired,
};

export default ProjectCards;
