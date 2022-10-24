import React from 'react';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// Here we import the Section.css file to grant access to some additional classNames
// import '../styles/Section.css';

// TODO: Create a styles object called "styles"
const styles = {
    projects: {
        backgroundColor: 'blue',
        textAlign: 'center',
    },
    bioPhotoCol: {
        justifyContent: 'center',
        padding: '20px'
    },
    bioInfo: {
        alignItems: 'center'
    }
}
function Projects() {

  return (
    <Container fluid className="projects" style={styles.projects}> 
        <h1>Projects</h1>
        <Row xs={1} md={4} className="g-4">
            <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
        </Row>
    </Container> 
  );
}

    export default Projects;
