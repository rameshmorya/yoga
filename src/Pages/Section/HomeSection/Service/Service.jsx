import React from "react";
import Servicearray from "../../../../Data/Service";
import ServiceCard from "../../../../components/ServiceCard/ServiceCard";
import "../../HomeSection/Service/Service.css";

const Service = () => {
  return (
    <>
      <div className="doServiceBox">
        <div className="headingBox">
          <div className="separator">
            <em className="icon-chakra"></em>
          </div>
          <h2>What We Do</h2>
        </div>
        <div className="container">
          <div className="flexRowBox">
            {Servicearray.map((val, ind) => {
              return (
                <ServiceCard
                  key={ind}
                  sicon={val.sicon}
                  stitle={val.stitle}
                  spara={val.spara}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
