import React from 'react';
import exercise from './data';

const Exercise = ({addExercise ,day}) => {
  return (
    <fieldset>
      <legend>Choose the Exercise</legend>
      {exercise.map(exe => (
        <div key={exe.id}>
          <input onChange = {e=> addExercise(day,exe)} type="checkbox" id={exe} name={exe.id} value={exe} />
          <label htmlFor={exe.name}> {exe.name}</label>
      <p> {exe.description}</p>
        </div>
      ))}
    </fieldset>
  );
};

export default Exercise;
