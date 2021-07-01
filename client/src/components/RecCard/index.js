import React from "react";
import { RecCardStyling } from "../styling/style";

const RecCard = (props) => {
  return (
    <>
      <div className="col">
        <RecCardStyling className="card text-center">
          {props.title}!
          <br></br>
          {props.favorites} ✰
        </RecCardStyling>
      </div>
    </>
  );
};

export default RecCard;
