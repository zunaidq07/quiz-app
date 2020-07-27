import React, { useReducer, useState } from 'react'
import QuizContext from './quizContext'
import quizReducer from './quizReducer'
import { SET_SCORE } from './types'
const QuizContextProvider = (props) => {
    const initialState = {
        quizArray:     [  
            {  
                "text":"the video stills shown is from which movie?",
                "video": "https://www.youtube.com/watch?v=ggFKLxAQBbc",
                "id":"2",
                "break_after":true,
                "required":true,
                "type":"single-select",
                "options":[  
                    "Underworld",
                    "Matrix",
                    "XXX",
                    "License to kill"
                ],
                "correctAnswer": "Matrix",
                "explanation": "the still is from very famous movie matrix"
            },
            {  
                "text":"The image shown below shows which famous monument?",
                "image": "https://cdn.havecamerawilltravel.com/places/files/2019/01/paris-eiffel-tower-in-paris-on-a-sunny-spring-day-03-copyright-havecamerawilltravel-com.jpg",
                "id":"3",
                "break_after":true,
                "required":true,
                "type":"single-select",
                "options":[  
                    "Eiffil Tower",
                    "The World trade center",
                    "guyana tower",
                    "Monte Gorbea"
                ],
                "correctAnswer": "Eiffil Tower",
                "explanation": "image is of famous eiffil tower France"
            },
            // {  
            //     "text":"Are you going to?",
            //     "id":"4",
            //     "type":"text-field-small"
            // },
            {  
                "text":"What goes up and down the stairs without moving?",
                "id":"5",
                "type":"single-select",
                "options":[  
                    "a toddler",
                    "an arrow",
                    "towels",
                    "a rug"
                ],
                "correctAnswer": "a rug",
                "explanation": "rug used to cover stairs"
            },
            {  
                "text":"What can you catch but not throw?",
                "id":"6",
                "type":"single-select",
                "options":[  
                    "a couch",
                    "a cold",
                    "a puppy",
                    "a baseball"
                ],
                "correctAnswer": "a cold",
                "explanation": "you can't throw cold"
            },
            {  
                "text":"I can run but not walk. Wherever I go, thought follows close behind. What am I?",
                "id":"7",
                "type":"single-select",
                "options":[  
                    "a doctor",
                    "a pineapple",
                    "a nose",
                    "pimples"
                ],
                "correctAnswer": "a nose",
                "explanation": "nose runs if you catch cold but it can't walk"
            },
            {  
                "text":"What's black and white and red all over?",
                "id":"8",
                "type":"single-select",
                "options":[  
                    "an embarrased skunk",
                    "a turtle",
                    "a giraffe",
                    "a dog"
                ],
                "correctAnswer": "a turtle",
                "explanation": "giraffe are black and white"
            },
            {  
                "text":"What goes around the world but stays in a corner?",
                "id":"9",
                "type":"single-select",
                "options":[  
                    "a stamp",
                    "coffee",
                    "a dog",
                    "plants"
                ],
                "correctAnswer": "a stamp",
                "explanation": "a stamp always stays on corner"
            }
        ],
        score: 0
    }
    const [state, dispatch] = useReducer(quizReducer, initialState)

    const setScore = (result) => {
        dispatch({type: SET_SCORE, payload: result})
    }

    return (
        <QuizContext.Provider 
            value={{
                quiz:state.quizArray,
                setScore,
                score: state.score
            }} 
        >
            { props.children }
        </QuizContext.Provider>
    )
}

export default QuizContextProvider