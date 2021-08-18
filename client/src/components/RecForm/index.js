import axios from "axios";
import React, { useRef } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import API from "../../utils/API";
import Cloudinary from "../Cloudinary";
import { Button, TextArea } from "../styling/style";
const OWAPI_KEY = process.env.OWAPI_KEY;
const geoUrl = "https://api.openweathermap.org/geo/1.0/direct?q=";

// Form for a user to add a recommendation/post
function RecForm(props) {
  console.log(props);
  const cityRef = useRef();
  const stateRef = useRef();
  const titleRef = useRef();
  const synopsisRef = useRef();
  const photo = props.photo;
  const user = useAuth();
  const history = useHistory();
  // created a variable and on load it is empty - default to empty
  let selectedCategory = "";

  // This function is taking the selected option and setting it
  // to a variable to be use in the post of the handleSubmit
  const handleSelect = (e) => {
    selectedCategory = e;
  };

  // add method to pass to Cloudinary - return state (value) of child component

  // or keep photo state here in parent element & pass handler to child

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titleRef === "") return;
    const city = cityRef.current.value;
    const state = stateRef.current.value

    const validCitySearch = geoUrl + city + "," + state + ",US&appid=" + OWAPI_KEY;

    testCity(validCitySearch, city, state);
  }

  function testCity(validCitySearch, city, state) {
    axios.get(validCitySearch)
      .then((response) => {
        console.log(response.data);
        const resCity = response.data[0].name;
        const resState = response.data[0].state;
        const resCountry = response.data[0].country;

        if (!resCity.includes(city) || resState !== state || resCountry !== "US") {
          console.log("Please enter a valid US City")
          cityRef.current.value = "";
          stateRef.current.value = "";
          return;
        } else {
          city = resCity;
          createPost(city, state);
        }
      })    
  }

  function createPost(city, state) {
    const locationFull = city + ", " + state;
    API.createPost({
      title: titleRef.current.value,
      location: locationFull,
      synopsis: synopsisRef.current.value,
      category: selectedCategory,
      image: photo,
      userID: user.currentUser.uid,
      
    })
      .then((res) => {
        console.log(user);
        console.log(res.data._id);
        history.push('/profile',
    
        ); 
      })
      .catch((err) => console.log(err));

    titleRef.current.value = "";
    cityRef.current.value = "";
    stateRef.current.value = "";
    synopsisRef.current.value = "";
  };
  

  return (
    <form>
      <div className="form-group text-center">
        <Cloudinary photo={props.photo} setPhoto={props.setPhoto} />
      </div>

      <label>City: </label>
      <div class="field has-addons searchByName">
          <div class="control is-expanded">
              <input ref={cityRef} class="input" type="text" placeholder="City"/>
          </div>
          <div class="control">
              <input ref={stateRef} class="input" type="text" placeholder="State"/>
          </div>
      </div>
      {/* <input
        ref={locationRef}
        className="col-12 form-group"
        type="text"
        placeholder="Enter City"
      /> */}
      <div className="form-group">
        <DropdownButton
          className="DDButton"
          alignRight
          title="Category"
          id="dropdownMenuButton"
          // This is the event listener which calls handleSelect when option is chosen
          onSelect={handleSelect}
        >
          <Dropdown.Item eventKey="art">Art & Culture</Dropdown.Item>
          <Dropdown.Item eventKey="bars">Bars</Dropdown.Item>
          <Dropdown.Item eventKey="cinema">Cinema</Dropdown.Item>
          <Dropdown.Item eventKey="coffee">Coffee & Tea</Dropdown.Item>
          <Dropdown.Item eventKey="music">Music</Dropdown.Item>
          <Dropdown.Item eventKey="landmarks">Landmarks</Dropdown.Item>
          <Dropdown.Item eventKey="restaurants">Restaurants</Dropdown.Item>
          <Dropdown.Item eventKey="shopping">Shopping</Dropdown.Item>
        </DropdownButton>
      </div>

      <label>Headline: </label>
      <input
        ref={titleRef}
        className="col-12 form-group"
        type="text"
        placeholder="Enter Headline"
      />

      <div className="form-group">
        <label>Short Intro: </label>
        <TextArea
          ref={synopsisRef}
          className="form-control"
          type="text"
          placeholder="Enter Introduction"
        />
      </div>
      <div className="text-center">
        <Button onClick={handleSubmit}>
       
            Submit
        </Button>
      </div>
    </form>
  );
}

export default RecForm;
