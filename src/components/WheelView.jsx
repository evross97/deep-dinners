import React from "react";
import Wheel from "./Wheel";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const WheelView = () => {
    const wheelItems = [
        {
            id:'1',
            icon: <FontAwesomeIcon icon={faThumbsUp} />,
            question: 'Is there such a thing as perfect love?'
        },
        {
            id:'2',
            icon: <FontAwesomeIcon icon={faHandshake}/>,
            question: 'What gift of generosity has impacted you the most?'
        },
        {
            id:'3',
            icon: <FontAwesomeIcon icon={faHandHoldingHeart}/>,
            question: 'What gift of generosity has impacted you the most?'
        },
        {
            id:'4',
            icon: <FontAwesomeIcon icon={faHandRock}/>,
            question: 'How can we become free?'
        },
        {
            id:'5',
            icon: <FontAwesomeIcon icon={faPuzzlePiece}/>,
            question: 'Where do you find your identity?'
        },
        {
            id:'6',
            icon: <FontAwesomeIcon icon={faHands}/>,
            question: 'What makes you feel alive?'
        },
        {
            id:'7',
            icon: <FontAwesomeIcon icon={faLaughBeam}/>,
            question: 'How do you know if you are happy?'
        },
    ]
    return (
        <Wheel items={wheelItems}/>
    );
};

export default WheelView;
