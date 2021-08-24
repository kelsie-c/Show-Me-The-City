import React, { useRef } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import API from "../../utils/API";
import Cloudinary from "../Cloudinary";
import { Button, TextArea } from "../styling/style";
import { useHistory } from "react-router-dom";


// Form for a user to add a recommendation/post
function EditForm(props) {
  
  console.log(props);
  const cityRef = useRef();
  const stateRef = useRef();
  const titleRef = useRef();
  const synopsisRef = useRef();
  const photo = props.photo;
  const history = useHistory();

  let location = props.location;
  let state = location[location.length - 2].toUpperCase() + location[location.length - 1].toUpperCase();
  let str = location.split(',');
  let newStr = str[0];
  let city = newStr.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
  let title = props.title;
  let synopsis = props.synopsis;
  // created a variable and on load it is empty - default to empty
  let selectedCategory = "Category";

  // This function is taking the selected option and setting it
  // to a variable to be use in the post of the handleSubmit
  const handleSelect = (e) => {
    selectedCategory = e;
  };

  // add method to pass to Cloudinary - return state (value) of child component

  // or keep photo state here in parent element & pass handler to child

  function updateCity() {
    location = cityRef.current.value + ", " + stateRef.current.value;
  }

  function updateTitle() {
    title = titleRef.current.value;
  }

  function updateSynopsis() {
    synopsis = synopsisRef.current.value;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    API.updatePost(props.recID, {
      
      title: title,
      location: location,
      synopsis: synopsis,
      category: selectedCategory,
      image: photo,
    })
      .then((res) => { history.push('/profile',
    
      ); })
      .catch((err) => console.log(err));

    titleRef.current.value = "";
    cityRef.current.value = "";
    stateRef.current.value = "";
    synopsisRef.current.value = "";
  };
  return (
    <form className="new-review-form" onSubmit={handleSubmit}>
      <div className="form-group text-center">
        <Cloudinary photo={photo} setPhoto={props.setPhoto} />
      </div>
      <label>City: </label>
      <div class="field has-addons searchByName">
          <div class="control is-expanded">
              <input ref={cityRef} class="input" type="text" placeholder={city} onChange={updateCity}/>
          </div>
          <div class="control">
              <input ref={stateRef} class="input" type="text" placeholder={state} maxlength="2" onChange={updateCity}/>
          </div>
      </div>

      <div className="form-group">
        <DropdownButton
          className="DDButton"
          alignRight
          title={selectedCategory}
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
        placeholder={props.title}
        onChange={updateTitle}
      />
      <div className="form-group">
        <label>Short Intro: </label>
        <TextArea
          ref={synopsisRef}
          className="form-control"
          type="text"
          placeholder={props.synopsis}
          onChange={updateSynopsis}
        />
      </div>

      <div className="text-center">
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
}

export default EditForm;
