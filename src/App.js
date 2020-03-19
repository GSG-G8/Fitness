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
      Thursday: [],
    },
  };

  setDay = MyDay => {
    const { day } = this.state;
    this.setState({ day: [...day, MyDay] });
  };

  removeDay = MyDay => {
    const { day } = this.state;
    this.setState({ day: day.filter(e => e !== MyDay) });
  };

  setExe = (day, Exe) => {
    const { exercise } = this.state;

    this.setState({
      exercise: {
        ...exercise,
        [day]: [...exercise[day], Exe],
      },
    });
  };

  removeExe = (day, Exe) => {
    const { exercise } = this.state;

    this.setState({
      exercise: {
        ...exercise,
        [day]: exercise[day].filter(e => e !== Exe),
      },
    });
  };

  render() {
    const { day, exercise } = this.state;
    console.log(day);
    console.log(exercise);

    return (
      <main>
        <Days addDay={this.setDay} removeDay={this.removeDay} dayArr={day} />
        <Displydays
          MyDays={day}
          addExercise={this.setExe}
          removeExe={this.removeDay}
          excersise={exercise}
        />
      </main>
    );
  }
}

export default App;
