import React, { useEffect, useState } from "react";
import Bookcard from "./Bookcard";
import { data } from "../../data";
const Showbooks = () => {
  const [bookdata, setBookdata] = useState(
    JSON.parse(localStorage.getItem("data"))
  );

  return (
    <div className="m-5">
      <div className="row">
        {bookdata.map((ele, index) => (
          <div
            className="col-md-6 col-lg-4 col-sm-12 mt-2 mb-2"
            key={index}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Bookcard ele={ele} heart={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showbooks;
