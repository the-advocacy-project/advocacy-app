import React from 'react';
import { link } from 'fs';

function Nutrition(props) {


const nutrition = Object.keys(props.nutrition).map(function(s){ return props.nutrition[s].question })


  return( <div>
  
   {nutrition}

  <form>
   
    <label>Answer here:
    <textarea type="text"
    name="answer"
      onChange={props.handleChangeInput}
    />
    </label>
    <input type="submit"/>
  </form>
</div>
)
}

export default Nutrition;
