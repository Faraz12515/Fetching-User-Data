import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserDetails from "../components/UserDetails";
import Users from "../components/Users";

export default function AppRoutes() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Users} />
        <Route exact path="/users/:id" component={UserDetails} />
      </Router>
    </div>
  );
}
