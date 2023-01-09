import React, { useContext } from 'react'
import { QuizContext } from '../../context/quiz';
import Options from '../Option';

import "./question.css"

function Question() {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];

    const selectOption = (option) => {
        dispatch({
            type: "CHECK_ANSWER",
            payload: { answer: currentQuestion.answer, option },
        })
    }

    return (
        <div id="question">
            <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
            <h2>{currentQuestion.question}</h2>
            <div id="optionsContainer">
                <p>{currentQuestion.options.map((option) => (
                    <Options option={option} key={option} answer={currentQuestion.answer} selectOption={() => selectOption()} />
                ))}</p>
            </div>
            {quizState.answerSelected && (
                <button onClick={() => dispatch({ type: "CHANGE_QUESTIONS" })}>Continuar</button>

            )}
        </div >
    )
}

export default Question