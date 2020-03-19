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

const Days = ({ addDay, removeDay, dayArr }) => {
  return (
    <fieldset>
      <legend>Choose the Day</legend>
      {days.map(day => (
        <div key={day}>
          <input
            onChange={e =>
              dayArr.indexOf(e.target.value) === -1
                ? addDay(e.target.value, day)
                : removeDay(e.target.value)
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
  );
};

export default Days;
