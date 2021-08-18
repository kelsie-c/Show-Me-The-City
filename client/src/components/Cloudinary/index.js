import axios from "axios";
import React, { useRef } from "react";
import { Button } from "../styling/style";
const CLOUDINARY_UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET;
const CLOUDINARY_URL = process.env.CLOUDINARY_URL;
const CLOUDINARY_IMAGE = process.env.CLOUDINARY_IMAGE;

function Cloudinary(props) {
  //   const [photo, setPhoto] = useState("https://via.placeholder.com/300x175");
  const triggerEvent = useRef(null);

  function handleChangeEvent(event) {
    var file = event.target.files[0];
    var formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    axios({
      url: CLOUDINARY_URL,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: formData,
    })
      .then(function (res) {
        const publicId = res.data.public_id;
        const version = res.data.version;
        const newUrl =
          CLOUDINARY_IMAGE +
          "c_fill,w_300,h_175,g_auto/v" +
          version +
          "/" +
          publicId +
          ".png";
        props.setPhoto(newUrl);
        // return props.photo;
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  return (
    <div
      className="card-cloud"
      // style={{ display: "block" }}
      onClick={() => triggerEvent.current.click()}
    >
      <img src={props.photo} id="img-preview" alt="" />
      <label className="file-upload-container" forhtml="file-upload">
        <input
          ref={triggerEvent}
          id="fileUpload"
          type="file"
          style={{ display: "none" }}
          onChange={handleChangeEvent}
        />
        <br></br>
      </label>
      <div>
        <Button type="submit">Add a Photo</Button>
      </div>
    </div>
  );
}

export default Cloudinary;
