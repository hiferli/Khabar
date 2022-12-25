import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./index.css";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize = 10;

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
          <NavBar></NavBar>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />          
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="in" key={"general"} category="general"></News>} />
            <Route exact path="/buisness" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="in" key={"buisness"} category="buisness"></News>} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="in" key={"entertainment"} category="entertainment"></News>} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="in" key={"general"} category="general"></News>} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="in" key={"health"} category="health"></News>} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="in" key={"science"} category="science"></News>} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="in" key={"sports"} category="sports"></News>} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="in" key={"technology"} category="technology"></News>} />
          </Routes>
        </Router>
      </div>
    )
  }
}






