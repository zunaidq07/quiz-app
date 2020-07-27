import React, { useState, useContext, Fragment } from 'react'
import { Card, ListGroup, Button, ToggleButton, Image } from 'react-bootstrap'
import Timer from '../Timer'
import ReactVideoPlayer from '../ReactVideoPlayer'
import QuizContext from '../../context/quizContext'
const Quiz = () => {
    const [answerSelected, setAnswerSelected] = useState('')
    const [getNextQuestion, setNextQuestion] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState('')
    const [timeUp, setTimeUp] = useState(false)
    const [index, setIndex] = useState(0)
    const { quiz, setScore, score } = useContext(QuizContext)
    const handleClick = (e) => {
        e.preventDefault()
        setIndex(index+1)
    }

    const handleNext = () => {
        setIndex(index+1)
        setNextQuestion(false)
    }
    const handleTimer = (timeleft) => {
        if(timeleft<=0){
            setTimeUp(true)
        }
    }

    const handleSubmit = () => {
        setNextQuestion(true)
        const { correctAnswer } = currentQuestion
        setScore(answerSelected === correctAnswer)
        let btnElement = document.querySelectorAll(`.answers-${question.id}`)
        btnElement.forEach(el => {
            if(answerSelected === el.textContent && answerSelected === correctAnswer) {
                updateClass(el, 'btn-success')
            }
            else if(answerSelected === el.textContent) {
                updateClass(el, 'btn-danger')
            }
            else if(correctAnswer === el.textContent) {
                updateClass(el, 'btn-success')
            }
        })
        setAnswerSelected('')
    }

    const updateClass = (el, type) => {
        el.classList.remove('btn-secondary');
        el.classList.add(type)
    }
    const style = {
        margin: '20px'
    }
    const setAnswers = (answer, question) => {
        setAnswerSelected(answer)
        setCurrentQuestion(question)
    }
    const question = quiz.length > index ? quiz[index] : ''
    return (
        <Card style={{margin: '0 auto'}} className="justify-content-md-center">
            <Timer handleTimer={handleTimer} />
            { (question && !timeUp) ?
            <Card.Body style={{padding: '0'}}>
                <Card.Title id={question.id}>{index+1}. { question.text}</Card.Title>
                {question.video ? 
                    <ReactVideoPlayer url={question.video}/> : ''
                }
                {question.image &&
                    <Image src={question.image} style={{width: '250px', height: '200px'}} fluid />
                }
                <ListGroup>
                { question.options.map((option, idx) => (
                    <ToggleButton
                        className={`answers-${question.id}`}
                        key={idx}
                        type="radio"
                        variant="secondary"
                        name="radio"
                        value={option}
                        checked={''}
                        onChange={(e) => setAnswers(e.currentTarget.value, question)}
                    >{option}</ToggleButton>
                ))}
                </ListGroup>
                {!getNextQuestion ? 
                    <Fragment>
                        <Button style={style} variant="primary" onClick={handleSubmit}>Submit</Button>
                        <Button style={style} variant="primary" 
                            onClick={handleClick}
                        >
                            Skip
                        </Button>
                    </Fragment>:
                    <Fragment>
                        <div><stron>Explanation: </stron>{currentQuestion.explanation}</div>
                        <Button style={style} variant="primary" 
                            onClick={handleNext}
                        >
                            Next Question
                        </Button>
                    </Fragment>
                }
            </Card.Body> :
            <Fragment>
                <h1>quiz completed</h1>
                <h1>Your Score is: {score}</h1>  
            </Fragment>
            }
        </Card>
    )
}

export default Quiz
