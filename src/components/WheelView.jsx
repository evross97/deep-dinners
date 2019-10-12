import React from "react";
import Wheel from "./Wheel";
import "./Styles/WheelView.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingHeart,
  faHandRock,
  faLeaf,
  faHandshake,
  faLaughBeam,
  faPuzzlePiece,
  faThumbsUp
} from '@fortawesome/free-solid-svg-icons'
import randomiseQuestions from "../scripts/randomiseQuestions";

const WheelView = () => {
  const questions = randomiseQuestions()
  console.log(questions)
  const wheelItems = [
    {
      id: '1',
      icon: <FontAwesomeIcon icon={faThumbsUp} size={"3x"} />,
      question: questions.goodnessQuestion.question.narrative
    },
    {
      id: '2',
      icon: <FontAwesomeIcon icon={faHandshake} size={"3x"} />,
      question: questions.trustQuestion.question.narrative
    },
    {
      id: '3',
      icon: <FontAwesomeIcon icon={faHandHoldingHeart} size={"3x"} />,
      question: questions.generosityQuestion.question.narrative
    },
    {
      id: '4',
      icon: <FontAwesomeIcon icon={faHandRock} size={"3x"} />,
      question: questions.freedomQuestion.question.narrative
    },
    {
      id: '5',
      icon: <FontAwesomeIcon icon={faPuzzlePiece} size={"3x"} />,
      question: 'Where do you find your identity?'
    },
    {
      id: '6',
      icon: <FontAwesomeIcon icon={faLeaf} size={"3x"} />,
      question: 'What makes you feel alive?'
    },
    {
      id: '7',
      icon: <FontAwesomeIcon icon={faLaughBeam} size={"3x"} />,
      question: 'How do you know if you are happy?'
    },
  ]
  return (
    <Wheel items={wheelItems} />
  );
};

export default WheelView;
