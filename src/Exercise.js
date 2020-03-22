import React from 'react';
import exercise from './data';

const Exercise = ({ addExercise, day, removeExe, excersise, showdayExe }) => (
  <div
    className="choosh-day__day__exe"
    style={{ display: showdayExe[day] ? 'block' : 'none' }}
  >
    <fieldset>
      <legend>Choose the Exercise</legend>
      {exercise.map(exe => (
        <div key={exe.id}>
          <input
            onChange={() =>
              excersise[day].indexOf(exe) === -1
                ? addExercise(day, exe)
                : removeExe(day, exe)
            }
            type="checkbox"
            id={exe}
            name={exe.id}
            value={exe}
          />
          <label htmlFor={exe.name}> {exe.name}</label>
          <p> {exe.description}</p>
          <img className="Exercise-img" src={exe.imgUrl} alt={exe.name} />
        </div>
      ))}
    </fieldset>
  </div>
);

export default Exercise;
