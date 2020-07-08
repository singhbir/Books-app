import React, { useState } from "react";
import Navbar from "./Navbar";
import ToggleButton from "react-toggle-button";

const Setting = () => {
  let [value, setValue] = useState(true);
  return (
    <div>
      <Navbar />
      <h1
        className="m-5 text-center"
        style={{ fontFamily: "'Piedra', cursive" }}
      >
        SETTING
      </h1>
      <table class="table mx-auto" style={{ width: "20%" }}>
        <thead class="thead-dark">
          <tr>
            <th scope="col" colSpan="2">
              Settings
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Dark Mode</th>
            <td>
              <ToggleButton
                value={value}
                onToggle={(value) => {
                  setValue(!value);
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Setting;
