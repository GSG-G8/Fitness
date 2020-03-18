import React from 'react';
import Exercises from './Exercise';

 const Displydays = ({ MyDays ,addExercise}) => {
  return (
    <div>
      {MyDays.map(e => (
        <>
 <section>{e}</section>
 <Exercises day ={e} addExercise={addExercise}/>
 </>
      ))}
    </div>
  );
};

export default Displydays;
