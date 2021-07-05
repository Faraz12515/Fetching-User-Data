import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ChildComponent from "../components/ChildComponent";
import ParentComponent from "../components/ParentComponent";
import Search from "../components/Search";
import UserDetails from "../components/UserDetails";
import Users from "../components/Users";

export default function AppRoutes() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Search} />
        {/* <Route exact path="/" component={Users} />
        <Route exact path="/users/:id" component={UserDetails} />
        <Route exact path="/parent" component={ParentComponent} />
        <Route exact path="/child" component={ChildComponent} /> */}
      </Router>
    </div>
  );
}
