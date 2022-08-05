import React from "react";
import "../ServiceCard/ServiceCard.css";

const ServiceCard = (props) => {
  return (
    <>
      <div className="cl4">
        <div className="serviceCardBox">
          <div className="serviceCardBg">
            <em className="icon-lotus"></em>
          </div>
          <div className="serviceCardItem">
            <div className="serviceCardFigure">
              <em className={props.sicon}></em>
            </div>
            <strong className="serviceCardTitle">{props.stitle}</strong>
            <p className="serviceCardDescription">{props.spara}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServiceCard;
