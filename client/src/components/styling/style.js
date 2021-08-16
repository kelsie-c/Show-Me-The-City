import styled from "styled-components";
import img from "../../images/city.jpg";

// Display/headline:font-family: 'Fira Sans', sans-serif;
// Navbar & all h tags besides the h1:font-family: 'Hind Siliguri', sans-serif;
// Small text/paragraphs:font-family: 'PT Serif Caption', serif;

// Media Query Sizing
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

//This styles the words on the starting landing page of app
export const H1 = styled.h1`
  color: #eeeeee;
  font-family: "Fira Sans", sans-serif;
  font-weight: 800;
`;

// This styles the starting landing page of app
export const LandContainer = styled.div`
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  position: relative;
`;

// Adds opacity to landing page image
export const Opacity = styled.div`
  background-color: rgba(3, 35, 42, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

// Centers search on landing page
export const Center = styled.div`
  padding-top: 30vh;
`;

// Styles Login and Signup buttons on landing page
export const LandingLinks = styled.div`
  color: #eeeeee;
  justify-content: space-around;
  text-decoration: underline;
  background-color: rgba(3, 35, 42);
  font-family: "Hind Siliguri", sans-serif;
  font-weight: 600;
`;

// This is a container used on many "views" of the app with same background color and padding
export const GeneralContainer = styled.div`
  background-color: #eeeeee;
  background-position: center;
  height: 100vh;
  font-color: #393e46;
  padding: 8%;
  padding-top: 2%;
`;

// This is a container used on many "views" of the app with same background color and padding
export const LoginContainer = styled.div`
  // padding: 8%;
  padding-top: 2%;

  @media ${device.tablet} {
    max-width: 800px;
  }

  @media ${device.laptop} {
    width: 800px;
  }

  @media ${device.desktop} {
    width: 800px;
  }
`;

export const GoogleLoginButtonContainer = styled.div`
  text-align: center;
  padding-top: 15px;
`;

// Styles the Navbar
export const Nav = styled.nav`
  background-color: #393e46;
  color: #76ead7;
  text-decoration: underline;
  font-family: "Hind Siliguri", sans-serif;
  font-weight: 600;
`;

// Styles top search bar on Home page
export const TopSearch = styled.div`
  font-family: "PT Serif Caption", "serif";
  font-weight: 400;
  padding-left: 4%;
`;

// Styles Title on Home page
export const HomeTitle = styled.div`
  font-size: 25px;
  padding: 5%;
  font-family: "Hind Siliguri", sans-serif;
  font-weight: 600;
`;

// Styles the dropdown button
export const DDButton = styled.div`
  width: 35vw;
  color: #393e46;
  border-radius: 1px;
  background-color: white;
  height: 40px;
  border-color: #393e46;

  @media ${device.tablet} {
    max-width: 200px;
  }
`;

export const Input = styled.input`
  @media ${device.tablet} {
    max-width: 500px;
  }

  @media ${device.laptop} {
    width: 1300px;
  }

  @media ${device.desktop} {
    width: 25vw;
  }
`;

// Styles Button on Create Rec Page
export const Button = styled.button`
  color: #76ead7;
  background-color: #393e46;
  width: 300px;
`;

// Styles the textarea for intro of create rec
export const TextArea = styled.textarea`
  color: #393e46;
  border-radius: 1px;
  background-color: white;
  border-color: #393e46;
`;

// Styles back to profile link
export const BackToProfile = styled.div`
  font-family: "Hind Siliguri", sans-serif;
  font-weight: 600;
`;

// Styles back to profile link
export const FormFont = styled.div`
  font-family: "Hind Siliguri", sans-serif;
  font-weight: 600;
`;

// Styles Profile Titles
export const ProfileHeader = styled.div`
  font-weight: bold;
  font-size: 4vh;
  padding: 3vh;
  font-family: "Fira Sans", sans-serif;
  font-weight: 800;
  color: #393e46;
`;

// Styles Profile Name and Email section
export const ProfileInfo = styled.div`
  font-size: 3vh;
  font-family: "Hind Siliguri", sans-serif;
  font-weight: 400;
  @media ${device.mobileS} {
    font-size: 20px;
  }

  @media ${device.tablet} {
    font-size: 30px;
  }

  @media ${device.laptop} {
    font-size: 40px;
  }
`;

// Styles CREATE tile from profile My Recs
export const CreateCard = styled.div`
  height: 30vh;
  justify-content: center;
  width: 120px;
  font-family: "Hind Siliguri", sans-serif;
  font-weight: 600;
  color: #76ead7;

  @media ${device.tablet} {
    width: 130px;
  }

  @media ${device.laptop} {
    width: 200px;
    height: 400px;
  }

  @media ${device.desktop} {
    width: 400px;
  }
`;

// Styles Recommendation Card
export const RecCardStyling = styled.div`
  height: 30vh;
  justify-content: center;
  background-color: #393e46;
  color: #76ead7;
  width: 35vw;
  font-family: "Hind Siliguri", sans-serif;
  font-weight: 600;
  padding: 4px;
  padding-top: 25px;

  @media ${device.tablet} {
    width: 130px;
  }

  @media ${device.laptop} {
    width: 200px;
    height: 400px;
  }

  @media ${device.desktop} {
    width: 400px;
  }
`;

// Styles Favorite Card
export const FaveCardStyling = styled.div`
  height: 30vh;
  justify-content: center;
  background-color: #393e46;
  color: #76ead7;
  font-family: "Hind Siliguri", sans-serif;
  font-weight: 600;
  width: 35vw;

  @media ${device.tablet} {
    width: 130px;
  }

  @media ${device.laptop} {
    width: 200px;
    height: 400px;
  }

  @media ${device.desktop} {
    width: 400px;
  }
`;

export const ImgRec = styled.img`
  width: 80vw;
`;

// This is a container used in the view-rec and view-fave pages
export const ViewContainer = styled.div`
  background-color: #eeeeee;
  font-color: #393e46;
  padding: 5%;
  justify-content: center;
  // padding-top: 2%;
`;

// Container in single rec and fave
export const RecContainer = styled.div`
  background-color: #393e46;
  width: 80vw;
`;

// styles rec title
export const RecTitle = styled.h1`
  color: #76ead7;
  font-size: 1.5rem;
  font-family: Fira Sans, sans-serif;
  font-weight: 800;
`;

// styles rec Favorite number and star
export const Fave = styled.a`
  color: #c4fb6d;
  font-size: 1.5rem;
  font-family: Fira Sans, sans-serif;
  font-weight: 800;
`;

// styles rec body text
export const RecBody = styled.div`
  color: #eeeeee;
  font-size: 4vw;
  font-family: Hind Siliguri, , sans-serif;
  font-weight: 600;
`;

// styles rec edit button
export const EditBtn = styled.button`
  color: #393e46;
  background-color: #c4fb6d;
  margin: 10px;
  font-family: Hind Siliguri, , sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  width: 40vw;
`;

// styles rec delete button
export const DelBtn = styled.button`
  color: #393e46;
  background-color: #ff1919;
  margin: 10px;
  font-family: Hind Siliguri, , sans-serif;
  font-weight: 600;
  width: 40vw;
`;

// styles login and signup card containers
export const LogCont = styled.div`
  margin: 2vh;
`;
