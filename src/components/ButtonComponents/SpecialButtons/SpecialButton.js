import React from "react";

const SpecialButton = (props) => {
  return (
    <button id={props.key}>{props.spcl}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default SpecialButton;
