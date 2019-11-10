import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/poster1">
            <Poster1 />
          </Route>
          <Route path="/poster2">
            <Poster2 />
          </Route>
          <Route path="/poster3">
            <Poster3 />
          </Route>
          <Route path="/poster4">
            <Poster4 />
          </Route>
          <Route path="/">
            <p>home</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );

  function Poster1() {
    window.location = "https://docs.google.com/forms/d/e/1FAIpQLScMKIOg3ZMsEUCzd7crtu0BVTUjAjtl2JobY4ylmxvIKshM8g/viewform";
    return <p>post1</p>;
  }

  function Poster2() {
    window.location = "https://docs.google.com/forms/d/e/1FAIpQLScMKIOg3ZMsEUCzd7crtu0BVTUjAjtl2JobY4ylmxvIKshM8g/viewform";
    return <p>post2</p>;
  }

  function Poster3() {
    window.location = "https://docs.google.com/forms/d/e/1FAIpQLScMKIOg3ZMsEUCzd7crtu0BVTUjAjtl2JobY4ylmxvIKshM8g/viewform";
    return <p>post3</p>;
  }

  function Poster4() {
    window.location = "https://docs.google.com/forms/d/e/1FAIpQLScMKIOg3ZMsEUCzd7crtu0BVTUjAjtl2JobY4ylmxvIKshM8g/viewform";
    return <p>post4</p>;
  }
}
export default App;
