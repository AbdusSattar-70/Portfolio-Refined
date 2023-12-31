import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaBars, FaXmark } from 'react-icons/fa6';
import logo from '../assets/logo.png';
import pdf from '../data/resume.pdf';

const NavBar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResumeLinkClick = () => {
    const link = document.createElement('a');
    link.href = pdf;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.download = 'sattar_resume.pdf';
    link.click();
  };

  // Responsive navigation toggle for small screens
  const renderMobileNavToggle = (
    <div className="d-flex justify-content-between align-items-center bg-white p-4 sticky-top">
      <div className="d-flex align-items-center">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top logo"
            alt="Brand logo"
          />
        </Navbar.Brand>
      </div>
      <div className="nav-toggle-button">
        <button type="button" className="humIcon" aria-label="Toggle Navigation Menu" onClick={toggleOffcanvas}>
          {showOffcanvas ? <FaXmark /> : <FaBars />}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {isLargeScreen ? (
        <div className="navMainContainer sticky-top">
          <div className="d-flex bg-white justify-content-between align-items-center">
            <Navbar.Brand href="/">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top logo"
                alt="Brand logo"
              />
            </Navbar.Brand>
            <Nav fill variant="tabs">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" className="nav-link">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className="nav-link">
                Contact
              </Nav.Link>
              <Nav.Link className="nav-link getResume" onClick={handleResumeLinkClick}>
                Get Resume
              </Nav.Link>
            </Nav>
          </div>
        </div>
      ) : (
        <>
          {renderMobileNavToggle}
          <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="d-flex bg-white flex-column justify-content-between">
                <Navbar.Brand href="/">
                  <img
                    src={logo}
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                    alt="logo"
                  />
                </Navbar.Brand>
                <Nav fill variant="tabs" className="align-items-start customFontOffCanvas flex-column">
                  <Nav.Link as={NavLink} to="/" onClick={() => setShowOffcanvas(false)}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/about" className="nav-link" onClick={() => setShowOffcanvas(false)}>
                    About
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/contact" className="nav-link" onClick={() => setShowOffcanvas(false)}>
                    Contact
                  </Nav.Link>
                </Nav>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      )}
    </>
  );
};

export default NavBar;
