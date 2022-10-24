import React from 'react';
import Button from 'react-bootstrap/Button';

const styles = {
    resume: {
        padding: '40px',
        textAlign: 'center',
    },
    profile: {
        width: '65%',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign:'justify',
        padding: '10px'
    }
}

function Resume() {
  return (
    <div className="resume" id="resume"  style={styles.resume}>
        <h1>Profile</h1>
        <p style={styles.profile}>
            Excellent technical, organizational, and time management skills used to streamline processes/procedures and enhance employee productivity and profitability in both small business and large corporation environments. Prove project management, troubleshooting, and team collaboration experience. Strong computer abilities and able to learn quickly and efficiently. Highly adaptable and reliable, requiring minimal guidance.
        </p>
        <Button variant="primary" href="assets/resume.pdf">Click Here to Download Resume</Button>
    </div>
  );
}

export default Resume;
