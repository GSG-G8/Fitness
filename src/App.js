import React from 'react';
import Days from './Days';
import {Displydays}  from './displayDay'
   
// import logo from './logo.svg';
// import './App.css';
class App extends React.Component {
  state = {
    day: [],
  };

  setDay = (e, MyDay) => {
    this.setState({ day: [...this.state.day, MyDay] });
  };

  removeDay = MyDay => {
    const { day } = this.state;
    this.setState({ day: day.filter(e => e !== MyDay) });
  };

  render() {
    console.log(this.state.day);
    return (
      <main>
        <Days
          addDay={this.setDay}
          removeDay={this.removeDay}
          dayArr={this.state.day}
        />
        < Displydays MyDays={this.state.day}/>
      </main>
    );
    // dayArr={this.state.day} removeDay={this.removeDay}
  }
}

export default App;
