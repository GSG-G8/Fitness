import React from 'react';

const days = [
  'Saturday',
  'Sunday',
  'Monday',
  'Tuseday',
  'Wednesday',
  'Thursday',
  'Friday',
];

const Days = ({ addDay, removeDay, dayArr, showdays, onClickDay }) => (
  <div className="days" style={{ display: showdays ? 'none' : 'block' }}>
    {/* style={{ display: hide ? 'none' : 'block' }} */}
    <div className="ff" >
      <h2>Choose the Day</h2>
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
    </div>
  </div>
);

export default Days;
