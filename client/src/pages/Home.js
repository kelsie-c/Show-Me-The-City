import React, { useEffect, useState } from "react";
import CardCarousel from "../components/CardCarousel";
import NavBar from "../components/NavBar";
import SearchBox from "../components/SearchBox";
import SortResults from "../components/SortResults";
import { GeneralContainer } from "../components/styling/style";
import { useAuth } from "../contexts/AuthContext";
import API from "../utils/API";

const Home = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [city, setCity] = useState("");
  const { currentUser, logout } = useAuth();
  const [data, setData] = useState([]);

  const login = "/login";
  const profile = "/profile";
  const logoutLink = "/";

  useEffect(() => {
    API.getPostsByCategory(props.location, selectedCategory).then((res) => {
      console.log(res);
      setData(res.data);
    });
  }, [selectedCategory]);

  useEffect(() => {
    API.getPostsByLocation(props.location).then((res) => {
      setData(res.data);
    });
  }, [props.location]);

  return (
    <>
      {!currentUser ? (
        <NavBar isProfile={false} login={login} />
      ) : (
        <NavBar isProfile={false} profile={profile} logout={logoutLink} />
      )}
      <SearchBox location={props.location} setLocation={props.setLocation} />
      <GeneralContainer className="text-center">
        <SortResults
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          location={props.location}
        />
        <br></br>
        <CardCarousel data={data} />
      </GeneralContainer>
    </>
  );
};

export default Home;
