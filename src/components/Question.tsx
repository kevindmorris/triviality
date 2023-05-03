import React from "react";
import { Carousel } from "react-bootstrap";

export default function Question(props: any) {
  console.log(props.question.question);
  return <p>{props.question.question}</p>;
}
