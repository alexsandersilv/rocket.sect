import React from "react";

const Plan = (props: {
  title: string,
  children: React.ReactNode
}) => (
  <div className="container">
    <strong>{props.title}</strong>
    <div>
      {props.children}
    </div>
    <button>Comprar</button>
  </div>
);

export default Plan;