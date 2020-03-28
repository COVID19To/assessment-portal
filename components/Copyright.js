// Libraries
import Typography from "@material-ui/core/Typography";

// Components
import Link from "@material-ui/core/Link";

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: "30px" }}>
    {"Copyright © "}
    <Link color="inherit" href="https://material-ui.com/">
      Info COVID-19
    </Link>
    {" "}
    {new Date().getFullYear()}
    {"."}
  </Typography>
);

export default Copyright;
