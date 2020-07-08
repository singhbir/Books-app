import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import App from "./App";
import Fav from "./Components/Fav/Fav";
import Addbook from "./Components/Bookscrud/Addbook";
import Removebook from "./Components/Bookscrud/Removebook";
import Reader from "./Components/ReadersArea/Reader";
import Setting from "./Components/Setting";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact default path="/" component={App} />
        <Route exact path="/fav" component={Fav} />
        <Route exact path="/addbook" component={Addbook} />
        <Route exact path="/removebook" component={Removebook} />
        <Route exact path="/readerarea" component={Reader} />
        <Route exact path="/setting" component={Setting} />
        <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  );
};

export default Routes;
