import React, { useState } from "react";
import Navbar from "../Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Addbook = () => {
  const [bookdata, setBookdata] = useState({
    title: "",
    author: "",
    image: "",
    desc: "",
    rating: 1,
  });

  function handleChange(event) {
    console.log(event.target.id);
    setBookdata({ ...bookdata, [event.target.id]: event.target.value });
  }

  function handlesubmit(event) {
    event.preventDefault();
    console.log("handlesubmitcalled");
    let data = JSON.parse(localStorage.getItem("data"));
    let updatedData = [bookdata, ...data];
    localStorage.setItem("data", JSON.stringify(updatedData));
    toast.success("Book is successfully added", {
      autoClose: 2000,
    });
  }
  {
    /*ADDING BOOKS FIELDS */
  }
  return (
    <div>
      <Navbar />
      <section style={{ height: "64.5vh" }} className="mt-5">
        <div className="col-10 col-sm-8 mx-auto mb-5">
          <h1
            className="m-5 text-center"
            style={{ fontFamily: "'Piedra', cursive" }}
          >
            ADD YOUR BOOK
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
            <div className="form-group">
              <input
                type="text"
                name="author"
                id="author"
                placeholder="author"
                className="form-control"
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="image"
                id="image"
                placeholder="add image url"
                className="form-control"
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="form-group">
              <textarea
                type="text"
                name="desc"
                id="desc"
                placeholder="Description"
                className="form-control"
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="rating"
                id="rating"
                placeholder="Rating out of 5"
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

export default Addbook;
