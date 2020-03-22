import React from 'react';
import exercise from './data';

const Exercise = ({ addExercise, day, removeExe, excersise, showdayExe ,onClickDayExe}) => (
  <div
    className="choosh-day__day__exe"
    style={{ display: showdayExe[day] ? 'block' : 'none' }}
  >
    <div>
      <button type="button" className="close" onClick={() => onClickDayExe(day)}>
        &times;
      </button>
      <h2 className="exe-h2">Choose the Exercise</h2>
      <div>
        {exercise.map(exe => (
          <div className="exe-cont" key={exe.id}>
            <div className="exe-emg">
              <img className="Exercise-img" src={exe.imgUrl} alt={exe.name} />
            </div>
            <div className="exe-desc">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Exercise;
