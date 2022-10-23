import React from 'react';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Here we import the Section.css file to grant access to some additional classNames
// import '../styles/Section.css';

// TODO: Create a styles object called "styles"
const styles = {
    bioPhoto: {
        border: '2px solid',
        maxHeight: '350px',
    },
    bioPhotoCol: {
        justifyContent: 'center',
        padding: '20px'
    },
    bioInfo: {
        alignItems: 'center'
    }
}
function AboutMe() {
  // TODO: Add a style attribute to `section`
  return (
    <Container fluid id="aboutMe">
        <Row>
            <Col sm={4} className="bioPhoto" style={styles.bioPhotoCol}>
                <Image src="assets/bio-photo.jpg" alt="C. Caitano" roundedCircle='true' style={styles.bioPhoto}></Image>
            </Col>
            <Col sm={8} className="bioInfo" >
                <div style={styles.bioInfo}>
                    <h2>About Me</h2>
                    <p>                
                        Born and raised on the Big Island of Hawaii. Graduated from Western Washington University with a B.S. in Mathematics and minors in Physics and Astronomy. Worked at The Boeing Company as an Interiors/Seats Stress Technical Analyst before moving back home to Hawaii. Currently co-owns/operates an automotive repair facility, Horizon Automotive, and a craft cocktail ice company, Big Island Craft Ice.
                    </p>
                </div>
            </Col>
        </Row>
    </Container>
  );
}

export default AboutMe;
