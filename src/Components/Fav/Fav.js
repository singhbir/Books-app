import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Bookcard from "../Bookstore/Bookcard";
const Fav = () => {
  const [favdata, setFavdata] = useState(
    JSON.parse(localStorage.getItem("fav"))
  );

  function onlyunique() {
    let books = favdata;
    let newArray = [];
    let uniqueObject = {};

    for (let i in books) {
      let objTitle = books[i]["title"];

      uniqueObject[objTitle] = books[i];
    }
    for (let i in uniqueObject) {
      newArray.push(uniqueObject[i]);
    }
    setFavdata(newArray);
  }

  useEffect(() => {
    onlyunique();
  }, []);

  return (
    <div>
      <Navbar />
      <h1
        className="m-5 text-center"
        style={{ fontFamily: "'Piedra', cursive" }}
      >
        MY COLLECTION
      </h1>
      {favdata.length > 0 ? (
        <div className="row mx-auto">
          {favdata.map((ele, index) => (
            <div
              className="col-md-6 col-lg-4 col-sm-12 my-2 mx-auto"
              key={index}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Bookcard ele={ele} heart={false} />
            </div>
          ))}
        </div>
      ) : (
        "NO FAV ITEMS IN LIST, PLEASE ADD SOME"
      )}
    </div>
  );
};

export default Fav;
