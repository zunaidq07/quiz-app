import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Firebase from '../../config/firebase'
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = event => {
        event.preventDefault();
        Firebase.auth().createUserWithEmailAndPassword(email, password).then((u) =>{
        }).catch((error) => {
            console.log(error);
        });
    }
    return (
        <div style={{width: '38rem', margin: 'auto'}}>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="sign up" 
                        value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <div className="btn-container">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default SignUp
