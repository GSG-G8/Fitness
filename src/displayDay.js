
import React from 'react';

 export const Displydays = ({MyDays}) => {
  return (
    <div>
{MyDays.map(e =>
<section>{e}</section>)}
    </div>

  ) 
}
