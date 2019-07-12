import React from 'react';
import './App.css';

interface SomeState {
  date: Date;
}
class App extends React.Component<{}, SomeState> {
  constructor(props:any) {
    super(props);
    this.state = {date: new Date()};
  }


  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default App;
