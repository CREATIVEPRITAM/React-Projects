import React, { useEffect, useState } from "react";
import Data from "../../Sourceses/Sourceses";
import "./Services.css";

const Services = () => {
  const initialData = {
    services: [
      {
        title: "title",
        image: "services/demo",
        description: "description",
      },
      {
        title: "title",
        image: "services/demo",
        description: "description",
      },
      {
        title: "title",
        image: "services/demo",
        description: "description",
      },
      {
        title: "title",
        image: "services/demo",
        description: "description",
      },
      {
        title: "title",
        image: "services/demo",
        description: "description",
      },
      {
        title: "title",
        image: "services/demo",
        description: "description",
      },
      {
        title: "title",
        image: "services/demo",
        description: "description",
      },
      {
        title: "title",
        image: "services/demo",
        description: "description",
      },
    ],
  };
  const [value, setValue] = useState(initialData);

  useEffect(() => {
    setValue(Data.services);
  }, []);

  return (
    <div className="container-fluid services-container">
      <div className="row">
        {value.services.map((element) => {
          return (
            <div className="col-3 d-flex flex-wrap flex-column justify-content-center align-items-center">
              <img className="services-icon" src={element.image}></img>
              <p className="services-title text-center">{element.title}</p>
              <p className="services-text text-center">{element.description}</p>
            </div>
          );
        })}
      </div>

    </div>
  );
};
export default Services;