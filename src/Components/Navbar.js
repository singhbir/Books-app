import React from "react";
import { AiFillFolderAdd, AiFillHome, AiFillSetting } from "react-icons/ai";
import { FaBookReader } from "react-icons/fa";
import {
  MdCollectionsBookmark,
  MdLibraryBooks,
  MdRemoveCircle,
} from "react-icons/md";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-expand-md  navbar-light  mx-auto">
      <Link to="/">
        <div
          className="navbar-brand text-center"
          style={{ backgroundColor: "#487164", width: "100px" }}
        >
          <AiFillHome style={{ fontSize: "35px", color: "white" }} />
        </div>
      </Link>
      <button
        className="navbar-toggler mx-0 "
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{ border: "2px solid black" }}
      >
        <MdLibraryBooks style={{ fontSize: "30px", color: "#f06d79" }} />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {/*booking adding*/}
          <li
            className="nav-item px-5 mx-3"
            style={{ backgroundColor: "#a1325e" }}
          >
            <Link to="/addbook">
              <div className="nav-link">
                <AiFillFolderAdd style={{ fontSize: "35px", color: "white" }} />
              </div>
            </Link>
          </li>
          {/*book adding end */}

          {/*book removing start*/}
          <li
            className="nav-item px-5 mx-3"
            style={{ backgroundColor: "#edb558" }}
          >
            <Link to={"/removebook"}>
              <div className="nav-link">
                <MdRemoveCircle style={{ fontSize: "30px", color: "white" }} />
              </div>
            </Link>
          </li>
          {/*book removing end */}

          {/* readers area*/}
          <li
            className="nav-item px-5 mx-3"
            style={{
              backgroundColor: "#e7394d",
            }}
          >
            <Link to="/readerarea">
              <div className="nav-link">
                <FaBookReader style={{ fontSize: "30px", color: "white" }} />
              </div>
            </Link>
          </li>
          {/*readers area end */}
          {/** COLLECTIONS */}
          <li
            className="nav-item px-5 mx-3"
            style={{ backgroundColor: "#edb558" }}
          >
            <Link to={"/fav"}>
              <div className="nav-link">
                <MdCollectionsBookmark
                  style={{ fontSize: "30px", color: "white" }}
                />
              </div>
            </Link>
          </li>
          {/**COLLECTION AREA END */}
          {/**SETTINGS AREA */}
          <li
            className="nav-item px-5 mx-3"
            style={{ backgroundColor: "#e8db3f" }}
          >
            <Link to={"/setting"}>
              <div className="nav-link">
                <AiFillSetting style={{ fontSize: "30px", color: "white" }} />
              </div>
            </Link>
          </li>
          {/**SETTING AREA END */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
