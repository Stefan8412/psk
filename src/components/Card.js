import React from "react";

function Card({ person }) {
  return (
    <div className="tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5">
      {/*  <img
        className="br-100 h3 w3 dib"
        alt={person.name}
        src="/assets/img/1(1).png"
      /> */}
      <div>
        <h2 className="tc dark-blue">{person.name}</h2>
        <h3 className="tc grey">{person.Level0}</h3>
        <p className="tc grey">{person.Level1}</p>
        {/* <p className="tc grey">{person.email}</p> */}
        <p className="tc grey">{person.OfficeNumber}</p>
      </div>
    </div>
  );
}

export default Card;
