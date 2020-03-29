// Component
import BodyLayout from "../components/BodyLayout";
import Typography from "@material-ui/core/Typography";
import Header from "../components/Header";
import InvisibleContainer from "../components/InvisibleContainer";
import CustomButton from "../components/CustomButton";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

// Constants
import { is_authorized, logout } from "../constants/authorization";

const titleStyle = {
  fontWeight: "normal",
  marginBottom: "20px"
};

const numberStyle = {
  fontWeight: "normal",
  fontSize: "2rem"
};

const CustomRadio = withStyles({
  root: {
    color: "rgba(0, 0, 0, 0.54)",
    "&$checked": {
      color: "#653CAD"
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);

const numberContainerStyle = {
  padding: "2px",
  display: "inline-block",
  verticalAlign: "middle"
};

const contactPatent = number => (
  <div className="top-section">
    <Typography component="h2" variant="h6" style={titleStyle}>
      Contact Patient
    </Typography>
    <div className="call-number-container">
      <div style={numberContainerStyle}>
        <Typography component="h2" variant="h5" style={numberStyle}>
          {number}
        </Typography>
      </div>
      <Hidden smUp>
        <div>
          <CustomButton
            isAlt={true}
            size="medium"
            onClick={() => 0}
            style={{
              width: "150px",
              height: "40px",
              display: "block",
              marginTop: "15px"
            }}
            name={"Call Patient"}
          />
        </div>
      </Hidden>
      <Hidden xsDown>
        <div style={{ float: "right" }}>
          <CustomButton
            isAlt={true}
            size="medium"
            onClick={() => 0}
            style={{ width: "150px", height: "40px" }}
            name={"Call Patient"}
          />
        </div>
      </Hidden>
    </div>
  </div>
);

const callStatus = () => (
  <div className="bottom-section">
    <Typography component="h2" variant="h6" style={titleStyle}>
      Call Status
    </Typography>
    <FormControl component="fieldset" style={{ width: "100%" }}>
      <RadioGroup
        row
        aria-label="call-status"
        name="call-status"
        defaultValue="top"
        style={{ width: "80%" }}
      >
        <FormControlLabel
          value="success"
          control={<CustomRadio color="primary" />}
          label="Successfully Connected"
        />
        <Hidden smUp>
          <FormControlLabel
            value="fail"
            control={<CustomRadio color="primary" />}
            label="Unable to Reach"
          />
        </Hidden>
        <Hidden xsDown>
          <FormControlLabel
            value="fail"
            control={<CustomRadio color="primary" />}
            label="Unable to Reach"
            style={{ margin: "0 0 0 auto" }}
          />
        </Hidden>
      </RadioGroup>
    </FormControl>
  </div>
);

export default function Index({ number, queueLength, token }) {
  if (!token) {
    logout();
    return <div></div>;
  }
  return (
    <BodyLayout
      text={"Thank you! We greatly appreciate your help."}
      marginTop="150px"
    >
      <Header />
      <InvisibleContainer>
        <div className="dashboard-box">
          <div className="inner-container">
            {contactPatent(number)}
            <hr />
            {callStatus()}
          </div>
        </div>
        <div className="dashboard-box margin">
          <div className="queue-container">
            <Typography
              component="h2"
              variant="h4"
              style={{ textAlign: "center" }}
            >
              {queueLength} Patients in Queue
            </Typography>
            <CustomButton
              size="large"
              onClick={() => 0}
              style={{ width: "250px", margin: "0 auto" }}
              name={"Show Next Patient"}
            />
          </div>
        </div>
      </InvisibleContainer>
      <style jsx>{`
        .dashboard-box {
          padding: 20px;
          border: 1px solid #ddd;
          background-color: white;
          border-radius: 10px;
        }
        .dashboard-box.margin {
          margin-top: 60px;
        }
        .inner-container {
          padding: 15px;
        }
        .call-number-container {
          height: 50px;
        }
        hr {
          border-top: 1px solid #ddd;
          margin: 25px 0;
        }

        @media (max-width: 600px) {
          .call-number-container {
            height: auto;
            height: fit-content;
          }
        }
      `}</style>
    </BodyLayout>
  );
}

Index.getInitialProps = async () => {
  const token = is_authorized();
  return { number: "000-000-0000", queueLength: 200, token };
};
