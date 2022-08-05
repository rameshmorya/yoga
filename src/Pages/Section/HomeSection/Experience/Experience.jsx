import React from "react";
import Yog from "../../../../assets/images/yoga.png";
import Experienceleft from "../../../../Data/Experience/ExperienceLeft";
import ExperienceRight from "../../../../Data/Experience/ExperienceRight";
import ExperienceCard from "../../../../components/ExperienceCard/ExperienceCard";
import "../Experience/Experience.css";

const Experience = () => {
  return (
    <>
      <div className="experienceBox">
        <div className="headingBox">
          <div className="separator">
            <em className="icon-chakra"></em>
          </div>
          <h2>Experience of Yoga</h2>
        </div>
        <div className="container">
          <div className="flexRowBox">
            <div className="cl4">
              <div className="yogaListBox text-right">
                {Experienceleft.map((val, ind) => {
                  return (
                    <ExperienceCard
                      key={ind}
                      exicon={val.exicon}
                      exheading={val.exheading}
                      expara={val.expara}
                    />
                  );
                })}
              </div>
            </div>

            <div className="cl4">
              <div className="">
                <img src={Yog} alt="" className="img-responsive" />
              </div>
            </div>
            <div className="cl4">
              <div className="yogaListBox rightBox">
                {ExperienceRight.map((val, ind) => {
                  return (
                    <ExperienceCard
                      key={ind}
                      exicon={val.exicon}
                      exheading={val.exheading}
                      expara={val.expara}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
