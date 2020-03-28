// Components
import Container from "@material-ui/core/Container";
import SignUpLoginLayout from "../components/SignUpLoginLayout";
import { GoogleLogin } from "react-google-login";

// Utilities
import Router from "next/router";

// Constants
import {google_authorization} from "../constants/authorization";

export default function Login() {
  const responseGoogle = response => {
    if (response && response.error) console.error("Invalid Login");
    else {
      const {tokenObj: {token_type, access_token}} = response;
      localStorage.setItem(google_authorization.key, access_token);

      Router.replace('/');
    }
  }
  return (
    <SignUpLoginLayout>
      <Container component="main" maxWidth="xs">
        <GoogleLogin
          clientId="13064702254-8jmahupmn4dcoa4vgbg8qhjj737kupm5.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      </Container>
    </SignUpLoginLayout>
  );
}
