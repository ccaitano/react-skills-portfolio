import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// Here we import the Header.css file to grant access to some additional classNames
// import '../styles/Footer.css';

// TODO: Create a styles object called "styles"
const styles = {
  footer: {
      background: '#23303D',
      color: '#90A3A7',
      textAlign: 'center',
      padding: '10px',
      position: 'fixed',
      bottom:'0',
      width: '100%'
  },
  contactIcons: {
      justifyContent: 'space-evenly'
  },
  copyright: {
    paddingTop: '10px',
    justifyContent: 'center'
  },
  contactLink: {
    justifyContent: 'space-evenly',
    width: '25%'
  }
}
function Footer() {
  // TODO: Add a style attribute to header and the h1 element

  return (
    <footer className="footer" style={styles.footer}>
      <Container fluid>
        <Row className="contactIcons" style={styles.contactIcons}>
              <a href="https://github.com/ccaitano" target="_blank" rel="noreferrer" style={styles.contactLink}><GitHubIcon className="icon">GitHub Profile</GitHubIcon></a>
              <a href="https://www.linkedin.com/in/cheryl-caitano-0a8a8250/" target="_blank" rel="noreferrer" style={styles.contactLink}><LinkedInIcon className="icon">LinkedIn Profile</LinkedInIcon></a>
              <a href="mailto:cheryl.caitano@gmail.com" target="_blank" rel="noreferrer" style={styles.contactLink}><EmailIcon className="icon">E-mail</EmailIcon></a>
        </Row>
        <Row className="copyright" style={styles.copyright}>
          <h6>© 2022</h6>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
