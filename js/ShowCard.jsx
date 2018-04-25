import React from "react";

const ShowCard = props => (
  <div className="show-card">
    <img
      src={`/public/img/posters/${props.show.poster}`}
      alt={`{show.title} Show Poster`}
    />
    <div>
      <h3>{props.show.title}</h3>
      <h4>({props.show.year})</h4>
      <p>{props.show.description}</p>
    </div>
  </div>
);

export default ShowCard;