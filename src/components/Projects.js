import React from 'react';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
// Here we import the Section.css file to grant access to some additional classNames
// import '../styles/Section.css';

// TODO: Create a styles object called "styles"
const styles = {
    images: {
        minHeight: '175px',
        maxHeight: '175px',
    },
    button: {
        padding: '10px',
        margin: '5px'
    },
    cards: {
        margin: '5px',
        justifyContent: 'space-evenly'
    },
    heading: {
        textAlign: 'center',
        padding: '20px'
    }
}
function Projects() {

  return (
    <Container fluid className="projects" id="projects" style={styles.projects}> 
        <h1 style={styles.heading}>Project Portfolio</h1>
        <Row xs={1} md={4} className="g-4">
            <Col>
              <Card style={styles.cards}>
                <Card.Img variant="top" src="assets/password-generator.jpg" style={styles.images}/>
                <Card.Body>
                  <Card.Title>Random Password Generator</Card.Title>
                  <Card.Text>
                    <div className="d-grid gap-2">
                        <Button variant="outline-secondary" href="https://ccaitano.github.io/random-password-generator/" >
                            Deployed Application
                        </Button>
                        <Button variant="outline-secondary" href="https://github.com/ccaitano/random-password-generator">
                            GitHub Repository
                        </Button>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={styles.cards}>
                <Card.Img variant="top" src="assets/js-quiz.jpg" style={styles.images}/>
                <Card.Body>
                  <Card.Title>JavaScript Quiz Game</Card.Title>
                  <Card.Text>
                    <div className="d-grid gap-2">
                        <Button variant="outline-secondary" href="https://ccaitano.github.io/js-quiz-game/" >
                            Deployed Application
                        </Button>
                        <Button variant="outline-secondary" href="https://github.com/ccaitano/js-quiz-game">
                            GitHub Repository
                        </Button>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={styles.cards}>
                <Card.Img variant="top" src="assets/daily-planner.jpg" style={styles.images}/>
                <Card.Body>
                  <Card.Title>Work Day Scheduler</Card.Title>
                  <Card.Text>
                    <div className="d-grid gap-2">
                        <Button variant="outline-secondary" href="https://ccaitano.github.io/daily-planner/" >
                            Deployed Application
                        </Button>
                        <Button variant="outline-secondary" href="https://github.com/ccaitano/daily-planner">
                            GitHub Repository
                        </Button>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={styles.cards}>
                <Card.Img variant="top" src="assets/aux-nudge.jpg" style={styles.images}/>
                <Card.Body>
                  <Card.Title>Aux Nudge</Card.Title>
                  <Card.Text>
                    <div className="d-grid gap-2">
                        <Button variant="outline-secondary" href="https://ccaitano.github.io/aux-nudge/" >
                            Deployed Application
                        </Button>
                        <Button variant="outline-secondary" href="https://github.com/ccaitano/aux-nudge">
                            GitHub Repository
                        </Button>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={styles.cards}>
                <Card.Img variant="top" src="assets/tech-blog.jpg" style={styles.images}/>
                <Card.Body>
                  <Card.Title>Tech Blog</Card.Title>
                  <Card.Text>
                    <div className="d-grid gap-2">
                        <Button variant="outline-secondary" href="https://mvc-tech-blog-cc.herokuapp.com/" >
                            Deployed Application
                        </Button>
                        <Button variant="outline-secondary" href="https://github.com/ccaitano/mvc-tech-blog-cc">
                            GitHub Repository
                        </Button>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={styles.cards}>
                <Card.Img variant="top" src="assets/virtual-notepad.jpg" style={styles.images}/>
                <Card.Body>
                  <Card.Title>Virtual Notepad</Card.Title>
                  <Card.Text>
                    <div className="d-grid gap-2">
                        <Button variant="outline-secondary" href="https://virtual-notepad.herokuapp.com/" >
                            Deployed Application
                        </Button>
                        <Button variant="outline-secondary" href="https://github.com/ccaitano/virtual-notepad">
                            GitHub Repository
                        </Button>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={styles.cards}>
                <Card.Img variant="top" src="assets/text-editor.jpg" style={styles.images}/>
                <Card.Body>
                  <Card.Title>Text Editor</Card.Title>
                  <Card.Text>
                    <div className="d-grid gap-2">
                        <Button variant="outline-secondary" href="https://pwa-jate-cc.herokuapp.com/" >
                            Deployed Application
                        </Button>
                        <Button variant="outline-secondary" href="https://github.com/ccaitano/pwa-text-editor">
                            GitHub Repository
                        </Button>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={styles.cards}>
                <Card.Img variant="top" src="assets/mood-remedy.jpg" style={styles.images}/>
                <Card.Body>
                  <Card.Title>Mood Remedy</Card.Title>
                  <Card.Text>
                    <div className="d-grid gap-2">
                        <Button variant="outline-secondary" href="https://mood-remedy.herokuapp.com/" >
                            Deployed Application
                        </Button>
                        <Button variant="outline-secondary" href="https://github.com/ccaitano/mood-remedy">
                            GitHub Repository
                        </Button>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={styles.cards}>
                <Card.Img variant="top" src="assets/weather-dashboard.jpg" style={styles.images}/>
                <Card.Body>
                  <Card.Title>Weather Dashboard</Card.Title>
                  <Card.Text>
                    <div className="d-grid gap-2">
                        <Button variant="outline-secondary" href="https://ccaitano.github.io/weather-dashboard/" >
                            Deployed Application
                        </Button>
                        <Button variant="outline-secondary" href="https://github.com/ccaitano/weather-dashboard">
                            GitHub Repository
                        </Button>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
        </Row>
    </Container> 
  );
}

    export default Projects;
