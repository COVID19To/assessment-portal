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
import {useEffect, useState} from 'react';
import fetch from "isomorphic-unfetch"

import { callNextPatient, updatePatient } from "../data/patient-provider";

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

const contactPatent = (phone_number, name) => (
  <div className="top-section">
    <Typography component="h2" variant="h6" style={titleStyle}>
      Contact Patient: {name}
    </Typography>
    <div className="call-number-container">
      <div style={numberContainerStyle}>
        <Typography component="h2" variant="h5" style={numberStyle}>
          {phone_number}
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







export default function Index({ initialPatientInfo, token }) {
  if (!token) {
    logout();
    return <div></div>;
  }
  const [currentPatientInfo, setCurrentPatientInfo] = useState(initialPatientInfo);

  async function  showNextPatient(prevPatient){
        prevPatient.handled_time =  new Date();
        await updatePatient(prevPatient);
        var nextPatientInfo = await callNextPatient();
        setCurrentPatientInfo(nextPatientInfo);
        console.log(nextPatientInfo);
    }

    async function  handlePatientStatusChange(changeEvent){
        currentPatientInfo.patient.status  = changeEvent.target.value;
        console.log("Patient status changed:");
        console.log(currentPatientInfo);
  }

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
            defaultValue="CONTACTED"
            style={{ width: "80%" }}
          >
            <FormControlLabel
              value="CONTACTED"
              control={<CustomRadio color="primary" />}
              label="Successfully Connected"
              onChange={handlePatientStatusChange}
              defaultChecked
            />
            <Hidden smUp>
              <FormControlLabel
                value="UNABLE_TO_REACH"
                control={<CustomRadio color="primary" />}
                label="Unable to Reach"
                onChange={handlePatientStatusChange}
              />
            </Hidden>
            <Hidden xsDown>
              <FormControlLabel
                value="UNABLE_TO_REACH"
                control={<CustomRadio color="primary" />}
                label="Unable to Reach"
                style={{ margin: "0 0 0 auto" }}
                onChange={handlePatientStatusChange}
              />
            </Hidden>
          </RadioGroup>
        </FormControl>
      </div>
    );

  return (
    <BodyLayout
      text={"Thank you! We greatly appreciate your help."}
      marginTop="150px"
    >
      <Header />
      <InvisibleContainer>
        <div className="dashboard-box">
          <div className="inner-container">
            {contactPatent(currentPatientInfo.patient.phone_number, currentPatientInfo.patient.name)}
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
              {currentPatientInfo.queueLength} Patients in Queue
            </Typography>
            <CustomButton
              size="large"
              onClick={() => showNextPatient(currentPatientInfo.patient)}
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
  var nextPatientInfo = await callNextPatient();
  console.log(nextPatientInfo);
  return { initialPatientInfo: nextPatientInfo, token };
};
