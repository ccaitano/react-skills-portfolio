import React from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const styles = {
    header: {
        fontFamily: 'Pacifico'
    },
    resume: {
        padding: '40px',
        textAlign: 'center',
        height:'100vh',
        backgroundColor: '#F5F0DA'
    },
    profile: {
        width: '65%',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign:'justify',
        padding: '10px'
    },
    list: {
        width: '30%',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '10px'
    }
}

function Resume() {
  return (
    <div className="resume" id="resume"  style={styles.resume}>
        <h1 style={styles.header}>Profile</h1>
        <p style={styles.profile}>
            Excellent technical, organizational, and time management skills used to streamline processes/procedures and enhance employee productivity and profitability in both small business and large corporation environments. Prove project management, troubleshooting, and team collaboration experience. Strong computer abilities and able to learn quickly and efficiently. Highly adaptable and reliable, requiring minimal guidance.
        </p>
        <h2 style={styles.header}>Proficiencies</h2>
        <ListGroup style={styles.list}>
            <ListGroup.Item>HTML/CSS</ListGroup.Item>
            <ListGroup.Item>JavaScript</ListGroup.Item>
            <ListGroup.Item>Heroku</ListGroup.Item>
            <ListGroup.Item>Node.js</ListGroup.Item>
            <ListGroup.Item>MySQL</ListGroup.Item>
            <ListGroup.Item>Progressive Web Applications</ListGroup.Item>
            <ListGroup.Item>MongoDB</ListGroup.Item>
            <ListGroup.Item>React</ListGroup.Item>
        </ListGroup>
        <Button variant="primary" href="assets/resume.pdf">Click Here to Download Resume</Button>
    </div>
  );
}

export default Resume;
