import React from "react";
import Header from "./Header/Header";
import Home from "./Home/Home";
import SearchPage from "./SearchPage/SearchPage";
import Footer from "./Footer/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
