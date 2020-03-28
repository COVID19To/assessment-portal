// Components
import Container from "@material-ui/core/Container";
import CustomButton from "../components/CustomButton";
import SignUpLoginLayout from "../components/SignUpLoginLayout";
import { GoogleLogin } from "react-google-login";

// Utilities
import Router from "next/router";

// Constants
import { google_authorization } from "../constants/authorization";

export default function Login() {
  const responseGoogle = response => {
    if (response && response.error) console.error("Invalid Login");
    else {
      const {
        tokenObj: { access_token }
      } = response;
      localStorage.setItem(google_authorization.key, access_token);

      Router.replace("/");
    }
  };
  return (
    <SignUpLoginLayout>
      <Container component="main" maxWidth="xs">
        <GoogleLogin
          clientId="13064702254-8jmahupmn4dcoa4vgbg8qhjj737kupm5.apps.googleusercontent.com"
          render={renderProps => (
            <CustomButton
              isGoogleLogin={true}
              name="Log in with Google"
              onClick={renderProps.onClick}
            />
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        ></GoogleLogin>
      </Container>
    </SignUpLoginLayout>
  );
}
