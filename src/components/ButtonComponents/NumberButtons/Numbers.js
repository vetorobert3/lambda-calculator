
import React, { useState } from "react";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders.
/*
import { numbers } from '../../../data'
*/
//Import your array data to from the provided data file
import { numbers } from '../../../data.js';
import NumberButton from './NumberButton.js';

const Numbers = () => {
  // STEP 2 - add the imported data to state
  //not doing anything
  const [numsState, setNumsState] = useState(0);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
      }
      {numbers.map((nums, key) => {
        return <NumberButton nums={nums} key={key}/>;
      })}
    </div>
  );
};

export default Numbers;
