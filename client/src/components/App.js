import React, { Component } from 'react';

import CurrentZone from "./CurrentZone";
import FunctionBar from "./FunctionBar";
import Divider from './Divider';

import "../styles/App.css";
import ReviewZone from './ReviewZone';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.firebase }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/firebase');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossOrigin="anonymous"/>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossOrigin="anonymous"/>
          <h1 className="App-title">Note Cards</h1>
        </header>
        <h2>
          {this.state.response}
        </h2>
        <div className="container">
          <CurrentZone/>
          <FunctionBar/>
          <Divider/>
          <ReviewZone/>
        </div>
      </div>
    );
  }
}

export default App;
