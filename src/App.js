
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }
  


  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (

      <Router>
        <Navbar  />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
      />
        <Routes>

          <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={6} country="in" category="general" />} />
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={6} country="in" category="entertainment" />} />
          <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} key="health" country="in" category="health" />} />
          <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="in" key="business" category="business" />} />
          <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="in" key="science" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="in" key="sports" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="in" key="technology" category="technology" />} />

        </Routes>

      </Router>


    )
  }
}
