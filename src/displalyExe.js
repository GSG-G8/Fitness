import React from 'react';

const DisplayExe = ({ MyDays, MyExcersise, show, closeOnClick }) => {
  console.log(MyExcersise[MyDays], 'hhhh');
  return (
    <div className="display-exe" style={{ display: show && 'block' }}>
      <button type="button" className="close" onClick={closeOnClick}>
        &times;
      </button>

      <h2 className="display-exe__h2">Your Excersise</h2>
      {MyDays.map(day => (
        <div className="dayWithExe" key={day}>
          <br />
          <h3 className="dayWithExe__h3"> {day}</h3>
          <ul>
            {MyExcersise[day].map(exe => (
              <li key={exe.id}> {exe.name}</li>
            ))}
          </ul>
          <br />
        </div>
      ))}
    </div>
  );
};

export default DisplayExe;
