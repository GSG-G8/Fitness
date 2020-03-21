import React from 'react';

const days = [
  'Saturday',
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
];

const Days = ({ addDay, removeDay, dayArr, showdays, onClickDay }) => (
  <div className="days">
    {/* style={{ display: hide ? 'none' : 'block' }} */}
    <fieldset className="ff" style={{ display: showdays ? 'none' : 'block' }}>
      <legend>Choose the Day</legend>
      {days.map(day => (
        <div key={day}>
          <input
            onChange={() =>
              dayArr.indexOf(day) === -1 ? addDay(day) : removeDay(day)
            }
            type="checkbox"
            id={day}
            name={day}
            value={day}
          />
          <label htmlFor={day}> {day}</label>
        </div>
      ))}
      <br />
      <button type="button" onClick={onClickDay}>
        Choose Your Daily Exercise{' '}
      </button>
    </fieldset>
    <div
      className="choosh-day"
      style={{ display: showdays ? 'block' : 'none' }}
    >
      <button type="button" className="close" onClick={onClickDay}>
        &times;
      </button>
      <div className="choosh-day__day">
        {dayArr.map(val => (
          <button key={val} type="button"> {val}</button>
        ))}
      </div>
    </div>
  </div>
);

export default Days;
