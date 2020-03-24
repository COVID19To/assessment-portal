import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const rootStyle = {
  margin: "10vh auto",
  padding: "20px",
  width: "500px",
  border: "1px solid #DDD",
  borderRadius: 10
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
  <div style={rootStyle}>
    <div style={logoContainer}>
      <img src="/assets/logo.png" style={centerImage} />
    </div>
    <div>{props.children}</div>
    <Box mt={8}>
      <Copyright />
    </Box>
  </div>
);

export default SignUpLoginLayout;
