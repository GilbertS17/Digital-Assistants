import React from "react";
import "../index.css";

export default function Card(props) {
  return (
    <div className="card">
      <img src={`${props.image}`} />
      <h1>{props.title}</h1>
      <h3>@{props.account}</h3>
      <p>{props.description}</p>
    </div>
  );
}
