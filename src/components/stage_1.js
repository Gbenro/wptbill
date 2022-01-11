import React, { useState, useRef, useContext } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { MyContext } from "../context";

const Stage_1 = () => {
  const textInput = useRef();
  const context = useContext(MyContext);
  const [error, setError] = useState([false, ""]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;
    const validate = validateInput(value);

    if (validate) {
      console.log(value);
    } else {
      console.log(error);
    }
  };

  const validateInput = (value) => {
    if (value === " ") {
      setError([true, "Sorry you need to add something"]);
      return false;
    }
    if (value.length <= 2) {
      setError([true, "Sorry you need at least 3 characters"]);
      return false;
    }
    return true;
  };
  return (
    <>
      <Form onSubmit={handleSubmit} className="mt-4">
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Add player name"
            name="player"
            ref={textInput}
          ></Form.Control>
        </Form.Group>
        <Button className="miami mt-4" variant="primary" type="submit">
          Add player
        </Button>
      </Form>
    </>
  );
};

export default Stage_1;
