import React, { useState } from "react";
import "./bookcard.css";
import StarRatings from "react-star-ratings";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

const Bookcard = ({ ele, heart }) => {
  const [addfav, setAddfav] = useState(false);
  let history = useHistory();
  function fav() {
    setAddfav(true);
    toast.success("Added to Fav", {
      autoClose: 2000,
    });

    let favitems = JSON.parse(localStorage.getItem("fav"));
    favitems = [ele, ...favitems];
    localStorage.setItem("fav", JSON.stringify(favitems));
  }

  function handleRead() {
    localStorage.setItem("read", JSON.stringify(ele));
    history.push("/readerarea");
  }

  return (
    <div className="card text-center">
      <div
        className="overflow"
        onClick={() => {
          handleRead();
        }}
      >
        <img
          src={ele.image}
          alt="image1"
          className="card-img-top"
          style={{ height: "200px", width: "200px" }}
        />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title" style={{ fontFamily: "Lobster" }}>
          {ele.title}
        </h4>
        <StarRatings
          rating={parseFloat(ele.rating)}
          starDimension="20px"
          starSpacing="15px"
        />
        <br />
        <span className="badge badge-pill badge-primary mt-3">
          {ele.author}
        </span>
        <div className="mt-3" onClick={() => fav()}>
          {heart ? (
            addfav ? (
              <AiFillHeart style={{ fontSize: "40px" }} />
            ) : (
              <AiOutlineHeart style={{ fontSize: "40px" }} />
            )
          ) : (
            <></>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Bookcard;
