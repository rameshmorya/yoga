import React from "react";
import Data from "../../../../Data/Schedule";
import ScheduleCard from "../../../../components/ExploreScheduleCard/ExploreScheduleCard";
import "../ExploreSchedule/ExploreSchedule.css";

const ExploreSchedule = () => {
  return (
    <>
      <div className="scheduleBox">
        <div className="headingBox">
          <div className="separator">
            <em className="icon-chakra"></em>
          </div>
          <h2>Explore Our Schedule</h2>
        </div>
        <div className="container">
          <div className="flexRowBox">
            {Data.map((val, ind) => {
              return (
                <ScheduleCard
                  key={ind}
                  schimg={val.schimg}
                  schheading={val.schheading}
                  schday={val.schday}
                  schtime={val.schtime}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreSchedule;
