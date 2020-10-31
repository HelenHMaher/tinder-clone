import React from "react";
import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>I am the chatpage</h1>
          </Route>
          <TinderCards />
          <Route path="/">
            <h1>I am the homepage</h1>
          </Route>
        </Switch>
        {/* Tidner cards */}
        {/* Buttons below tinder cards */}

        {/*Chats screen */}
        {/* Individual chat screen */}
      </Router>
    </div>
  );
}

export default App;
