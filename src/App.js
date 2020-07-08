import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import First from "./Components/First";
import Showbooks from "./Components/Bookstore/Showbooks";
import { data } from "./data";
import { AiFillStar } from "react-icons/ai";

function App() {
  const [loading, setLoading] = useState(true);

  function setmaindata() {
    if (localStorage.getItem("data") === null) {
      localStorage.setItem("data", JSON.stringify(data));
      setLoading(false);
    }
    setLoading(false);
    // ? localStorage.setItem("data", JSON.stringify(data))
    // : console.log("welcome to data");)
  }

  useEffect(() => {
    setmaindata();
    localStorage.getItem("fav") === null
      ? localStorage.setItem("fav", JSON.stringify([]))
      : console.log("welcome");
    localStorage.setItem("read", JSON.stringify(data[0]));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <First />
      <h1 className="mt-5">
        <AiFillStar />
        BOOKS
      </h1>
      {loading ? <></> : <Showbooks />}
    </div>
  );
}

export default App;
