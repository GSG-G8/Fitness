import React from 'react';
import Exercises from './Exercise';

const Displydays = ({
  MyDays,
  addExercise,
  removeExe,
  excersise,
  showdays,
  onClickDay,
  onClickDayExe,
  showdayExe,
}) => (
  <div className="Disply-days">
    {/* style={{ display: hide ? 'none' */}
    <div
      className="choosh-day"
      style={{ display: showdays ? 'block' : 'none' }}
    >
      <button type="button" className="close" onClick={onClickDay}>
        &times;
      </button>
      <div className="choosh-day__day">
        {MyDays.map(val => (
          <div key={val}>
            <button
              className="choosh-day__day_button"
              onClick={() => onClickDayExe(val)}
              key={val}
              type="button"
            >
              {val}
            </button>
            <Exercises
            
              day={val}
              addExercise={addExercise}
              removeExe={removeExe}
              excersise={excersise}
              showdayExe={showdayExe}
              onClickDayExe={onClickDayExe}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Displydays;
