import React from "react";
import { Link } from "react-router-dom";
import { RecCardStyling } from "../styling/style";
const style2 = {
  color: "#76EAD7",
};
function RecCard(props) {
  const recID = props.data._id;
  const data = props.data;
  const setData = props.setData;
  const location = props.location;
  return (
    <>
      <div className="col">
        <RecCardStyling className="card text-center">
          <Link
            style={style2}
            to={{
              pathname: "/view-recommendation",
              rec: { recID },
              data: { data },
              setData: { setData },
              location: { location },
            }}
          >
            {props.data.title}!<br></br>
            <br></br>
          </Link>
          <br></br>
        </RecCardStyling>
      </div>
    </>
  );
}

export default RecCard;
