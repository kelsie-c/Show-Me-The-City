import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { AuthProvider } from "../src/contexts/AuthContext";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import PrivateRoute from "./components/PrivateRoute/index";

import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import Create from "./pages/CreateRec";
import Edit from "./pages/EditRec";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ViewFavorite from "./pages/ViewFavorite";
import ViewRec from "./pages/ViewRec";

function App() {

  const [location, setLocation] = useState("New York City, NY");

  // dynamic array that pulls only existing cities from the database

  return (
    <div>
      <Router>
        
        <div>
          <AuthProvider>
            <Switch>
              <Route
                exact
                path="/home"
                component={() => <Home location={location} setLocation={setLocation} />}
              />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute path="/create" component={Create} />
              <PrivateRoute path="/edit" component={Edit} />
              <PrivateRoute path="/view-recommendation" component={ViewRec} />
              <PrivateRoute path="/view-favorite" component={ViewFavorite} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route
                exact
                path="/"
                component={() => (
                  <Landing location={location} setLocation={setLocation} />
                )}
              />
              <Route exact path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </div>
      </Router>
    </div>
  );
}

export default App;
