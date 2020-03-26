import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SignUpLoginLayout from "../components/SignUpLoginLayout";
import CustomButton from "../components/CustomButton";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const centerDiv = {
  margin: 'auto',
  width: 'fit-content',
  display: 'block'
};

export default function Doctor() {
  const classes = useStyles();

  return (
    <SignUpLoginLayout>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <div style={centerDiv}>
              <CustomButton name="Log In" onClick={() => 0} />
            </div>
            <Grid container>
              <div
                style={{
                  margin: "10px auto",
                  display: "block",
                  width: "fit-content"
                }}
              >
                <Link href="mailto:user@example.com" variant="body2">
                  {"Don't have an account? Contact Us"}
                </Link>
              </div>
            </Grid>
          </form>
        </div>
      </Container>
    </SignUpLoginLayout>
  );
}
