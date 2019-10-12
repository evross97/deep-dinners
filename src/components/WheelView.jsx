import React from "react";
import Wheel from "./Wheel";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faHandHoldingHeart,
    faHandRock,
    faLeaf,
    faHandshake,
    faLaughBeam,
    faPuzzlePiece,
    faThumbsUp
} from '@fortawesome/free-solid-svg-icons'


const WheelView = () => {
    const wheelItems = [
        {
            id:1,
            icon: <FontAwesomeIcon icon={faThumbsUp} size={"3x"}/>,
            question: 'Is there such a thing as perfect love?'
        },
        {
            id:2,
            icon: <FontAwesomeIcon icon={faHandshake} size={"3x"}/>,
            question: 'Is there something on Earth we can truly trust?'
        },
        {
            id:3,
            icon: <FontAwesomeIcon icon={faHandHoldingHeart} size={"3x"}/>,
            question: 'What gift of generosity has impacted you the most?'
        },
        {
            id:4,
            icon: <FontAwesomeIcon icon={faHandRock} size={"3x"}/>,
            question: 'How can we become free?'
        },
        {
            id:5,
            icon: <FontAwesomeIcon icon={faPuzzlePiece} size={"3x"}/>,
            question: 'Where do you find your identity?'
        },
        {
            id:6,
            icon: <FontAwesomeIcon icon={faLeaf} size={"3x"}/>,
            question: 'What makes you feel alive?'
        },
        {
            id:7,
            icon: <FontAwesomeIcon icon={faLaughBeam} size={"3x"}/>,
            question: 'How do you know if you are happy?'
        },
    ]
    return (
        <Wheel items={wheelItems}/>
    );
};

export default WheelView;
