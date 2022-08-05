import React from "react";
import "../ExploreScheduleCard/ExploreScheduleCard.css";

const Schedulecard = (props) => {
  return (
    <>
      <div className="cl4">
        <div className="scheduleCardBox">
          <div className="scheduleCardFigure">
            <img src={props.schimg} alt="" className="img-responsive" />
          </div>
          <div className="scheduleCardItem">
            <strong className="scheduleCardTitle">{props.schheading}</strong>
            <p className="scheduleCardDay">{props.schday}</p>
            <p className="scheduleCardTime">{props.schtime}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Schedulecard;
