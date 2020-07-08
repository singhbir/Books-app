import React, { useState } from "react";
import Navbar from "../Navbar";
const Reader = () => {
  let [readData, setReaddata] = useState(
    JSON.parse(localStorage.getItem("read"))
  );

  return (
    <div>
      {/**READERS AREA  */}
      <Navbar />
      <h1
        className="m-5 text-center"
        style={{ fontFamily: "'Piedra', cursive" }}
      >
        READ BOOK
      </h1>
      <div
        className="card mb-3 mx-auto"
        style={{ maxWidth: "1000px", marginTop: "2%", width: "70rem" }}
      >
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={readData.image} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{readData.title}</h5>
              <p className="card-text">{readData.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reader;
