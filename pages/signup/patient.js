import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CustomButton from "../../components/CustomButton";
import SignUpLoginLayout from "../../components/SignUpLoginLayout";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const onSignUp = () => {
  console.log("signed up");
};

const centerButton = {
  margin: "10px auto",
  width: "fit-content",
  display: "block"
};

export default function SignUp() {
  const classes = useStyles();
  return (
    <SignUpLoginLayout>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  type="number"
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                />
              </Grid>
            </Grid>
            <div style={centerButton}>
              <CustomButton name="Sign Up" onClick={onSignUp} />
            </div>
            <Grid container>
              <Grid item>
                <Link href="/signup/doctor" variant="body2">
                  {"No I am a doctor"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </SignUpLoginLayout>
  );
}
