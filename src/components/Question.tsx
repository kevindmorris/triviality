import React from "react";

export default function Question(props: any) {
  function decodeHtml(text: any) {
    let txt = document.createElement("textarea");
    txt.innerHTML = text;
    return txt.value;
  }

  return <p>{decodeHtml(props.question.question)}</p>;
}
