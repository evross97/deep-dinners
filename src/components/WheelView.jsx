import React from "react";
import Wheel from "./Wheel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import goodnessQuestions from "../resources/goodness-question-prompts.json";

const WheelView = () => {
  const wheelItems = [
    {
      id: "1",
      icon: <FontAwesomeIcon icon={faCoffee} />,
      question: "Is there such a thing as perfect love?"
    },
    {
      id: "2",
      icon: <FontAwesomeIcon icon={faCoffee} />,
      question: "What gift of generosity has impacted you the most?"
    },
    {
      id: "3",
      icon: <FontAwesomeIcon icon={faCoffee} />,
      question: "Do you like tea?"
    },
    {
      id: "4",
      icon: <FontAwesomeIcon icon={faCoffee} />,
      question: "Do you like tea?"
    },
    {
      id: "5",
      icon: <FontAwesomeIcon icon={faCoffee} />,
      question: "Do you like tea?"
    },
    {
      id: "6",
      icon: <FontAwesomeIcon icon={faCoffee} />,
      question: "Do you like tea?"
    },
    {
      id: "7",
      icon: <FontAwesomeIcon icon={faCoffee} />,
      question: "Do you like tea?"
    }
  ];
  return <Wheel items={wheelItems} />;
};

export default WheelView;
