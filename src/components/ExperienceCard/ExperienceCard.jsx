import React from "react";
import "../ExperienceCard/ExperienceCard.css";
const ExperienceCard = (props) => {
  return (
    <>
      <div className="yogaList">
        <div className="yogaListBody">
          <h3>{props.exheading}</h3>
          <p>{props.expara}</p>
        </div>
        <div className="icon">
          {" "}
          <em className={props.exicon}></em>{" "}
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
