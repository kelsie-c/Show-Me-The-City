import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import NavBar from "../components/NavBar/index";
import {
  BackToProfile,
  DelBtn,
  EditBtn,
  ImgRec,
  RecBody,
  RecContainer,
  RecTitle,
  ViewContainer,
} from "../components/styling/style";
import API from "../utils/API";

const style = {
  color: "#393E46",
  fontSize: "25px",
};

const ViewRec = (props) => {
  const recID = props.location.rec.recID;
  const history = useHistory();

  const [data, setData] = useState([]);
  let image = data.image;
  let title = data.title;
  let synopsis = data.synopsis;
  let location = data.location;

  useEffect(() => {
    API.getPost(recID).then((res) => {
      setData(res.data);
      console.log(res);
    });
  }, [recID]);

  function handleDelete() {
    if (
      window.confirm("Are you sure you want to delete this recommendation?")
    ) {
      API.deletePost(recID).then(history.push("/profile"));
    }
  }

  return (
    <>
      <NavBar />
      <ViewContainer>
        <BackToProfile>
          <a href="/profile">Back to Profile</a>
        </BackToProfile>
        <div className="container">
          <br></br>
          <ImgRec src={data.image} alt="bbq"></ImgRec>
          <RecContainer>
            <br></br>
            <div className="row text-center">
              <RecTitle className="col">{data.title}</RecTitle>
            </div>

            <RecBody className="container">
              <p>{data.synopsis}</p>

              <div className="row text-center">
                <EditBtn className="col">
                  <Link
                    style={style}
                    to={{
                      pathname: "/edit",
                      recID: { recID },
                      image: { image },
                      title: { title },
                      synopsis: { synopsis },
                      location: { location },
                    }}
                  >
                    Edit
                  </Link>
                </EditBtn>
                <DelBtn style={style} className="col" onClick={handleDelete}>
                  Delete
                </DelBtn>
              </div>
            </RecBody>
          </RecContainer>
        </div>
      </ViewContainer>
    </>
  );
};

export default ViewRec;
