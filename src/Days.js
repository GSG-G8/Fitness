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

const Days = ({ addDay, removeDay, dayArr, hide }) => (
  <div className="days" style={{ display: hide ? 'none' : 'block' }}>
    <fieldset>
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
    </fieldset>
  </div>
);

export default Days;
