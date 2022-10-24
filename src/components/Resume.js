import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

const styles = {
    resume: {
        padding: '30px'
    },
}

function Resume() {
  return (
    <div className="resume" id="resume"  style={styles.resume}>
        <Button variant="primary" href="assets/resume.pdf">Click Here to Download Resume</Button>
    </div>
  );
}

export default Resume;
