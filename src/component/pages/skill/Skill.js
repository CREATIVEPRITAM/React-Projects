import React, { useEffect, useState } from "react";
//import Styles from "./styles";
import "./Skill.css";

const Skill = (props) => {
  const initialData = {
    title: "title",
    skills: [
      { name: "skill", percentage: "45%" },
      { name: "skill", percentage: "65%" },
      { name: "skill", percentage: "85%" },
    ],
  };

  const [value, setValue] = useState(initialData);
  useEffect(() => {
    setValue(props.data.skills);
  }, []);

  return (
    <div className="row skill-container py-5">
      <div className="col-6 py-3 pl-5">
        <h1 className="skill-title">{value.title}</h1>
        <div className="skills-holder">
          {value.skills.map((ele) => {
            return (
              <div className="single-skill-holder">
                <p className="skill-name">
                  {ele.name}&nbsp;&nbsp;&nbsp;&nbsp;{`${ele.percentage}`}
                </p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${ele.percentage}`}}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-2"></div>
      <div className="col-4">
        <img src="skill.png" height="250px" />
      </div>
    </div>
  );

  //UI/UX Design 75%,web development 90% ,marketing 65%
};
export default Skill;
