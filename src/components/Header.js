import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
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
        padding: '10px',
        position: 'sticky',
        top: '0',
        width: '100%',
        zIndex: '999',
        alignItems: 'center'
    },
    name: {
        color: '#90A3A7',
        fontFamily: 'Georgia',
        textAlign: 'left',
        paddingLeft: '20px'
    },
    text: {
      justifyContent: 'space-evenly',
      alignItems: 'center'
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
        <Row style={styles.text}>
          <Col>
            <h1 style={styles.name}>Cheryl Caitano</h1>
          </Col>
          <Col >
            <Nav variant="pills" defaultActiveKey="/aboutMe" style={styles.navbar}>
              <Nav.Item>
                <Nav.Link href="#aboutMe" onClick={()=>handlePageChange('AboutMe')} className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>About Me</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#projects" onClick={()=>handlePageChange('Projects')} className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#resume" onClick={()=>handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#contact" onClick={()=>handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
