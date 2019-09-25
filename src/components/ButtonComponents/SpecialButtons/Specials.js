import React, { useState } from "react";

//import any components needed

//Import your array data to from the provided data file
import { specials } from '../../../data.js';
import SpecialButton from './SpecialButton.js';

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [splsState, setSplsState] = useState(specials);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {specials.map((spcl, key) => {
         return <SpecialButton spcl={spcl} key={key}/>
       })}
    </div>
  );
};

export default Specials;
