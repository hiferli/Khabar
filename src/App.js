import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  createBrowserRouter,
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar></NavBar>
          <Routes>
            <Route exact path="/" element={<News pageSize={10} country="in" key={"general"} category="general"></News>} />
            <Route exact path="/buisness" element={<News pageSize={10} country="in" key={"buisness"} category="buisness"></News>} />
            <Route exact path="/entertainment" element={<News pageSize={10} country="in" key={"entertainment"} category="entertainment"></News>} />
            <Route exact path="/general" element={<News pageSize={10} country="in" key={"general"} category="general"></News>} />
            <Route exact path="/health" element={<News pageSize={10} country="in" key={"health"} category="health"></News>} />
            <Route exact path="/science" element={<News pageSize={10} country="in" key={"science"} category="science"></News>} />
            <Route exact path="/sports" element={<News pageSize={10} country="in" key={"sports"} category="sports"></News>} />
            <Route exact path="/technology" element={<News pageSize={10} country="in" key={"technology"} category="technology"></News>} />
          </Routes>
        </Router>
      </div>
    )
  }
}






