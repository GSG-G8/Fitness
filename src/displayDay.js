import React from 'react';
import Exercises from './Exercise';

const Displydays = ({ MyDays, addExercise, removeExe, excersise }) => (
  <div className="Disply-days">
    {/* style={{ display: hide ? 'none' */}
    {MyDays.map(e => (
      <div key={e}>
        <section>{e}</section>
        <Exercises
          day={e}
          addExercise={addExercise}
          removeExe={removeExe}
          excersise={excersise}
        />
      </div>
    ))}
  </div>
);

export default Displydays;
