import Quiz from "../../img/quiz.svg"

import React, { useContext } from 'react'

import "./welcome.css"
import { QuizContext } from "../../context/quiz"

function Welcome() {

  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h1>Seja bem-vindo</h1>
      <p>Clique no botão para iniciar</p>
      <button onClick={(() => dispatch({ type: "CHANGE_STATE" }))}>Iniciar</button>
      <img src={Quiz} alt="Início do Quiz" />
    </div>
  )
}

export default Welcome