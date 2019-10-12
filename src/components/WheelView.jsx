import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Wheel from "./Wheel";

const WheelView = () => {
    return (
        <Wheel items={['1', '2', '3']}/>
    );
};

export default WheelView;
