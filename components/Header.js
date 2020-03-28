// Components
import LogoBox from "./LogoBox";
import CustomButton from "./CustomButton";
import { GoogleLogout } from "react-google-login";
import { logout } from "../constants/authorization";

const headerBar = {
  backgroundColor: "white",
  maxHeight: "84px"
};

const headerContainer = {
  maxWidth: "1300px",
  margin: "0 auto 20px",
  padding: "0 20px 0 10px"
};

const logoutContainer = () => ({
  float: "right",
  marginTop: "10px"
});

const buttonStyle = {
  width: "100px",
  height: "40px"
};

const Header = () => (
  <div style={headerBar}>
    <div style={headerContainer}>
      <LogoBox
        containerStyle={{ display: "inline-block" }}
        imageStyle={{ width: "100px", padding: "10px" }}
      />
      <div style={logoutContainer()}>
        <GoogleLogout
          clientId="13064702254-8jmahupmn4dcoa4vgbg8qhjj737kupm5.apps.googleusercontent.com"
          render={renderProps => (
            <CustomButton
              name="Log out"
              buttonStyle={buttonStyle}
              onClick={renderProps.onClick}
            />
          )}
          buttonText="Logout"
          onLogoutSuccess={logout}
          style={{ backgroundColor: "black", width: "100%" }}
        ></GoogleLogout>
      </div>
    </div>
  </div>
);

export default Header;