//{this.apiKey}
import logo from './images/NewsAppLogo.png';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import noImg from './images/noImage.png';
import darkMode from './images/darkMode.png';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {

  // apiKey=process.env.REACT_APP_NEWS_API
  apiKey='ac3c4912223f4bc285acb74ec38ad158';

  constructor() {
    super();
    this.state = {
      progress: 0
    }
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <Router>
        <LoadingBar progress={this.state.progress} />
        <Navbar Logo={logo} darkMode={darkMode}/>
        <Routes>
          <Route exact path="/" element={<News key='general' noImg={noImg} apiKey={this.apiKey} country='in' category='general' setProgress={this.setProgress} />}></Route>
          <Route exact path="/business" element={<News key='business' noImg={noImg} apiKey={this.apiKey} country='in' category='business' setProgress={this.setProgress} />}></Route>
          <Route exact path="/entertainment" element={<News key='entertainment' noImg={noImg} apiKey={this.apiKey} country='in' category='entertainment' setProgress={this.setProgress} />}></Route>
          <Route exact path="/health" element={<News key='health' noImg={noImg} apiKey={this.apiKey} country='in' category='health' setProgress={this.setProgress} />}></Route>
          <Route exact path="/science" element={<News key='science' noImg={noImg} apiKey={this.apiKey} country='in' category='science' setProgress={this.setProgress} />}></Route>
          <Route exact path="/sports" element={<News key='sports' noImg={noImg} apiKey={this.apiKey} country='in' category='sports' setProgress={this.setProgress} />}></Route>
          <Route exact path="/technology" element={<News key='technology' noImg={noImg} apiKey={this.apiKey} country='in' category='technology' setProgress={this.setProgress} />}></Route>
        </Routes>
      </Router>
    )
  }
}