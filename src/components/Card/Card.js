import React from "react";
import CARDELEMENT from "./card.json";

function Card({ title, children }) {
  return (
    <div className="card-list">
      {CARDELEMENT &&
        CARDELEMENT.map((item) => (
          <div className="card" key={item.id}>
            <a href={item.link}>
              <img src={item.image} alt="Monkey.png" />
            </a>
            <div className="text-container">
              <p> {item.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
export default Card;
