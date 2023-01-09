import React, { useContext } from 'react'
import { QuizContext } from "../../context/quiz"

import "./option.css"

function Options({ option }) {
    const [quizState, dispatch] = useContext(QuizContext)

    return (
        <div className="option">
            <p>{option}</p>
        </div>
    )
}

export default Options