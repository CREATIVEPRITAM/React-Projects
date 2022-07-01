import React, { useEffect, useState } from "react";
import Data from "../../Sourceses/Sourceses";
import "./Number.css";

const Number = () => {
  const initialData = {
    numbers: [
      {
        number: 0,
        title: "title",
        image: "demo",
      },
      {
        number: 0,
        title: "title",
        image: "demo",
      },
      {
        number: 0,
        title: "title",
        image: "demo",
      },
      {
        number: 0,
        title: "title",
        image: "demo",
      },
    ],
  };
  const [data, setData] = useState(initialData);

  useEffect(() => {
    setData(Data.numbers);
  },[]);

  return (
    <div className="container-fluid number-container">
      <div className="row all-project">
        {data.numbers.map((single) => {
          return (
            <div className="col-3">
              <div className="text-holder">
                <img src={single.image} className="project-icon"></img>
                <div className="count-text">
                  <p className="numberOf-project">{single.number}</p>
                  <p className="project-title">{single.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Number;
