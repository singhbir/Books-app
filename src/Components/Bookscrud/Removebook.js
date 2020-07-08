import React, { useState } from "react";
import Navbar from "../Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Removebook = () => {
  const [title, setTitle] = useState("");
  function handleChange(event) {
    setTitle(event.target.value);
  }
  function handlesubmit(event) {
    event.preventDefault();
    let data = JSON.parse(localStorage.getItem("data"));
    let updatedData = data.filter(
      (ele) => ele.title.split(" ").join("") !== title.split(" ").join("")
    );
    localStorage.setItem("data", JSON.stringify(updatedData));
    toast.success("Book is successfully Removed", {
      autoClose: 2000,
    });
  }
  return (
    <div>
      {/**FORM FOR REMOVING BOOK */}
      <Navbar />
      <section style={{ height: "64.5vh" }} className="mt-5">
        <div className="col-10 col-sm-8 mx-auto mb-5">
          <h1
            className="m-5 text-center"
            style={{ fontFamily: "'Piedra', cursive" }}
          >
            REMOVE YOUR BOOK
          </h1>
          <form
            onSubmit={(event) => {
              handlesubmit(event);
            }}
          >
            <div className="form-group">
              <input
                type="text"
                name="title"
                id="title"
                placeholder="title"
                className="form-control"
                onChange={(event) => handleChange(event)}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
          </form>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Removebook;
