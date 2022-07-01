import React, { useState, useEffect } from "react";
import Data from "../../Sourceses/Sourceses";
import "./Client.css";

const Client = () => {
  const initialData = {
    clientImage: [
      "client/demo",
      "client/demo",
      "client/demo",
      "client/demo",
      "client/demo",
    ],
  };

  const [value, setValue] = useState(initialData);

  useEffect(() => {
    setValue(Data.client);
  }, []);

  return (
    <div className="container-fluid px-0 client-container">
      <div className="row all-project">
        <div className="col-1"></div>
        {value.clientImage.map((element,index) => {
          return (
            <div className="col-2 text-center">
              <div className="text-center">
                <img src={element} className="img-fluid rounded"></img>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Client;
{
  /* <div className="col-2 text-center">
          <div className="text-center">
            <img src="client/client_2.jpg" className="img-fluid rounded" ></img>
          </div>
        </div>
        <div className="col-2 text-center">
          <div className="text-center">
            <img src="client/client_3.jpg" className="img-fluid rounded"></img>
          </div>
        </div>
        <div className="col-2 text-center">
          <div className="text-center">
            <img src="client/client_4.jpg" className="img-fluid rounded"></img>
          </div>
        </div>
        <div className="col-2 text-center">
          <div className="text-center">
            <img src="client/client_5.jpg" className="img-fluid rounded"></img>
          </div>
        </div> */
}
