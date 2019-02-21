import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import components here e.g.
import MainPage from './components/MainPage.jsx';

class App extends Component {
  render() {
    return <MainPage />;
    <div>hello there</div>;
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
