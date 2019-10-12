import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
// import XMLParser from "react-xml-parser";
import questions from "../resources/question-prompts.json";

const CreateJoinScreen = () => {
  return (
    <Form>
      <FormGroup>
        <Label for="createGame">Create Game</Label>
        <Input
          type="email"
          name="email"
          id="createGame"
          placeholder="with a placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="password placeholder"
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default CreateJoinScreen;
