import React from 'react';
import Exercises from './Exercise';

const Displydays = ({ MyDays, addExercise, removeExe, excersise,hide }) => (
  <div className="Disply-days" style={{ display: hide ? 'none' : 'block' }}>
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
