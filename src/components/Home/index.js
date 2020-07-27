import React, { useState } from 'react'
import { Card, Image } from 'react-bootstrap'
import Navbar from '../Navbar'
import Quiz from '../Quiz'
import image from '../../images/quizBtn.png'
import './Home.scss'

const Home = () => {
    const [playQuiz, setPlayQuiz] = useState(false)
    const handleClick = () => {
        setPlayQuiz(true)
    }
    return (
        <div>
            <Navbar />
            {!playQuiz ?
                <div className="image-container">
                    <Image className="img-btn" src={image} onClick={handleClick} fluid />
                </div>:
                <Card className="text-center">
                    <Quiz />
                </Card>
            }
        </div>
    )
}

export default Home
