import Box from "@material-ui/core/Box";
import BodyLayout from './BodyLayout';
import Copyright from './Copyright';

const rootStyle = {
  margin: "10vh auto",
  padding: "20px",
  width: "500px",
  border: "1px solid #DDD",
  backgroundColor: 'white',
  borderRadius: 10,
  boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)'
};

const logoContainer = {
  paddingBottom: "20px",
  borderBottom: "1px solid rgb(221, 221, 221)"
};

const centerImage = {
  display: "block",
  margin: "auto"
};

const SignUpLoginLayout = props => (
  <BodyLayout>
    <div style={rootStyle}>
      <div style={logoContainer}>
        <img src="/assets/logo.png" style={centerImage} />
      </div>
      <div>{props.children}</div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </div>
  </BodyLayout>
);

export default SignUpLoginLayout;
