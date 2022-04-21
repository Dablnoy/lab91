import React from "react";
import s from "./Main.module.css";
export default function Div(props) {
  return (
    <div className={s.first}>
      <h2>{props.name}</h2>
      <hr></hr>
      <h4>{props.text}</h4>
    </div>
  );
}
