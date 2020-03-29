import React from "react";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

const bodyStyle = {
  minHeight: "100vh",
  minWidth: "320px"
};

const themedBackground = () => ({
  height: "450px",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  display: "block",
  background: "linear-gradient(30deg, #421987 50%, #34126F 50%)",
  zIndex: -1
});

const textStyle = (marginTop, fontSize) => ({
  fontSize: fontSize || "2.3rem",
  fontFamily: "Roboto",
  fontWeight: 100,
  color: "white",
  marginTop: marginTop || "10vh"
});

const BodyLayout = ({ text, marginTop, children }) => {
  const content = text ? (
    <React.Fragment>
      <Hidden xsDown>
        <Typography component="h1" align="center" style={textStyle(marginTop)}>
          {text}
        </Typography>
      </Hidden>
      <Hidden smUp>
        <Typography
          component="h1"
          align="center"
          style={textStyle(marginTop, "1.7rem")}
        >
          {text}
        </Typography>
      </Hidden>
    </React.Fragment>
  ) : (
    ""
  );
  return (
    <div style={bodyStyle}>
      {children}
      <div style={themedBackground()}>{content}</div>
    </div>
  );
};

export default BodyLayout;
