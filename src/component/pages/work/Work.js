import React, { useEffect, useState } from "react";
import "./Work.css";

import Data from "../../Sourceses/Sourceses";

const Work = () => {
  const initialData = {
    title: "title",
    subTitle: "title",
    products: ["demo", "demo", "demo", "demo", "demo", "demo", "demo", "demo"],
  };

  const [value, setValue] = useState(initialData);

  useEffect(() => {
    if (Data != undefined) {
     setValue(Data.products);
    } else {
      setValue(value);
    }
  });

  return (
    <div className="container-fluid img-container p-3">
      <h1 className="product-title ">{value.title}</h1>
      <div className="row">
        {value.products.map((element) => {
          return (
            <div className="col-3 sigle-product">
              <div className="overlay">
                <img src="eye.png"></img>
              </div>
              <img className="product-img img-even" src={element} />
            </div>
          );
        })}
      </div>
      <div className="row">
        <p className="load-more pt-4">{value.subTitle}</p>
      </div>
    </div>
  );
};
export default Work;
