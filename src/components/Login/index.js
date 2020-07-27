import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Firebase from '../../config/firebase'
import SignUp from '../SignUp'
import './Login.scss'

const Login = () => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [signUp, setSignUP] = useState(false)

    const handleSubmit = event => {
        event.preventDefault();
        Firebase.auth().signInWithEmailAndPassword(email, password).then((u) =>{
        }).catch((error) => {
            console.log(error)
        });
    }

    const handleNewUser = () => {
        setSignUP(true)
    }
    return (
        <div style={{width: '38rem', margin: '0 auto'}}>
            {!signUp ?
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" 
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
                            Sign in
                        </Button>
                    </div>
                </Form>

                <div className="btn-container">
                    <h3>new user? sign up here</h3>
                    <Button className="btn" onClick={handleNewUser}>Sign up</Button> 
                </div>
            </div>:
            <SignUp />
            }   
        </div>
    )
}

export default Login
