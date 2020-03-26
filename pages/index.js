import BodyLayout from "../components/BodyLayout";
import Typography from "@material-ui/core/Typography";
import Header from "../components/Header";
import InvisibleContainer from "../components/InvisibleContainer";
import CustomButton from "../components/CustomButton";

const textStyle = {
  marginTop: "150px"
};

export default function Index() {
  // if (!localStorage.getItem('assessmentPortalLogin')) return Router.replace('/login');
  return (
    <BodyLayout
      text={"Thank you! We greatly appreciate your help."}
      textStyle={textStyle}
    >
      <Header />
      <InvisibleContainer>
        <div className="dashboard-box">
          <div>
            <Typography
              component="h2"
              variant="h6"
              style={{ fontWeight: "normal" }}
            >
              Contact Patient
            </Typography>
            <div>
              <div style={{ display: "inline-block" }}>
                <Typography
                  component="h2"
                  variant="h5"
                  style={{ fontWeight: "normal" }}
                >
                  XXX-YYY-ZZZZ
                </Typography>
              </div>
              <div style={{ float: "right" }}>
                <CustomButton
                  isAlt={true}
                  onClick={() => 0}
                  style={{ width: "150px", height: "40px" }}
                  name={"Call Patient"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-box margin">
          <p>Call next patient.</p>
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
      `}</style>
    </BodyLayout>
  );
}
