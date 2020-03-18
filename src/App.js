import React from 'react';
import Days from './Days';
import Displydays from './displayDay';
// import Exercise from './Exercise';

// import logo from './logo.svg';
// import './App.css';
class App extends React.Component {
  state = {
    day: [],
    exercise: {
      Saturday: [],
      Sunday: [],
      Monday: [],
      Tuseday: [],
      Wednesday: [],
      Thursday:[],
    },
  };

  setDay = MyDay => {
    this.setState({ day: [...this.state.day, MyDay] });
  };

  removeDay = MyDay => {
    const { day } = this.state;
    this.setState({ day: day.filter(e => e !== MyDay) });
  };
  setExe = (day,Exe) => {
    this.setState({ exercise: {...this.state.exercise,[day]: [...this.state.exercise[day], Exe]} });

  }
  render() {
    console.log(this.state.day);
    console.log(this.state.exercise['Saturday']);

    return (
      <main>
        <Days
          addDay={this.setDay}
          removeDay={this.removeDay}
          dayArr={this.state.day}
        />
        <Displydays MyDays={this.state.day} addExercise={this.setExe} />
      </main>
    );
  }
}

export default App;
