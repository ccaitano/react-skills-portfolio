import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Here we import the Header.css file to grant access to some additional classNames
// import '../styles/Header.css';
// FOG - #EFEFEF
// MIDNIGHT - #23303D
// TIDE - #395159
// MIST - #90A3A7
// SUNSET - #935430
// SHELL - #CBA688

// TODO: Create a styles object called "styles"
const styles = {
    header: {
        background: '#23303D',
        textAlign: 'center',
        padding: '10px'
    },
    name: {
        color: '#90A3A7',
        fontFamily: 'Georgia',
        justifyContent: 'left',
    },
    navbar: {
      justifyContent: 'space-evenly',
    }
}
function Header({ currentPage, handlePageChange }) {
  // TODO: Add a style attribute to header and the h1 element

  return (
    <header className="header" style={styles.header}>
      <Container fluid>
        <Row>
          <Col>
            <h1 style={styles.name}>Cheryl Caitano</h1>
          </Col>
          <Col>
            <nav className="nav navbar" style={styles.navbar}>
              <a href="#aboutMe" onClick={()=>handlePageChange('AboutMe')} className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>About Me</a>
              <a href="#projects" onClick={()=>handlePageChange('Projects')} className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>Projects</a>
              <a href="#resume" onClick={()=>handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
              <a href="#contact" onClick={()=>handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
            </nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
