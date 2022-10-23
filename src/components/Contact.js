import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

const styles = {
    contact: {
        padding: '30px'
    },
    formButton: {
        justifyContent: 'center',
    }
}

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid e-mail address.');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!name) {
      setErrorMessage(`Please enter your name.`);
      return;
    }
    if (!message) {
        setErrorMessage(`Please enter a message.`);
        return;
    }

    // If successful, we want to clear out the input after registration.
    setName('');
    setMessage('');
    setEmail('');
    alert('Message successfully submitted!');
  };

  return (


    <div className="contact" id="contact"  style={styles.contact}>
        <Card className="contactForm" style={styles.contactForm}>
            <Card.Header>
                Contact Me
            </Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} name="email" placeholder="Enter e-mail" onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} name="name" placeholder="Enter name" onChange={handleInputChange} />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="text" value={message} name="message" placeholder="Enter message..." as="textarea" rows={3} onChange={handleInputChange} />
                    </Form.Group>
                
                    <Button variant="primary" type="submit" onClick={handleFormSubmit} style={styles.formButton}>
                        Submit
                    </Button>
                </Form>
                {/* Display error message if invalid e-mail address */}
                {errorMessage && (
                    <div>
                        <Alert key="danger" variant="danger" className="error-text">{errorMessage}</Alert>
                    </div>
                )}
            </Card.Body>
        </Card>
    </div>
  );
}

export default Contact;
