import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Car from "./components/Car";
import List from "./components/List";
import UI from "./components/Ul";
import Datatable from "./components/Table";
import Hook from "./components/Hook";
import Todo from "./components/Todo";
import Addbar from "./components/Addbar";
import Item from "./components/Item";

const Routing = () => {
  return (
    <Router>
      <nav class="navbar navbar-expand-sm bg-dark">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="/">หน้าแรก</a>
              </li>
            <li class="nav-item">
                <a class="nav-link" href="/ui">UI</a>
              </li>
            <li class="nav-item">
              <a class="nav-link" href="/list">List</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/hook">Hook</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/car">Car</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/todo">Todo</a>
            </li>
          </ul>
        </div>
      </nav>

        <br></br>

      <Switch>
        <Route exact path="/" component={Datatable} />
        <Route path="/ui" component={UI} />
        <Route path="/list" component={List} />
        <Route path="/hook" component={Hook} />
        <Route path="/item" component={Item} />
        <Route path="/car" age="25" eye="black" component={Car} />
        <Route path="/todo" component={Todo} />

      </Switch>
    </Router>
  );
};

// const Routing = () => {
//   return (
//     <Router>
//       <Link to="/">Home </Link>
//       <Link to="/ui">UI </Link>
//       <Link to="/list">List </Link>
//       <Link to="/hook">Hook </Link>
//       <Link to="/car">Car </Link>
//       <Link to="/todo">Todo </Link>
  //       <Switch>
  //         <Route exact path="/" component={Datatable} />
  //         <Route path="/ui" component={UI} />
  //         <Route path="/list" component={List} />
  //         <Route path="/hook" component={Hook} />
  //         <Route path="/car" age="25" eye="black" component={Car} />
  //         <Route path="/todo" component={Todo} />
  //       </Switch>
//     </Router>
//   );
// };

ReactDOM.render(
  <>
    <Routing />
    <Addbar />
  </>,
  document.getElementById("root")
);