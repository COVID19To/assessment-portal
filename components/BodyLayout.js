import React from "react";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

const bodyStyle = {
  minHeight: "100vh",
  minWidth: "320px"
};

const themedBackground = {
  height: "450px",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  display: "block",
  background: "linear-gradient(30deg, #421987 50%, #34126F 50%)",
  zIndex: -1
};

const textStyle = (marginTop, fontSize) => ({
  fontSize: fontSize || "2.3rem",
  fontFamily: "Roboto",
  fontWeight: 100,
  color: "white",
  marginTop: marginTop || "5vh"
});

const BodyLayout = props => {
  const content = props.text ? (
    <React.Fragment>
      <Hidden xsDown>
        <Typography
          component="h1"
          align="center"
          style={textStyle(props.marginTop)}
        >
          {props.text}
        </Typography>
      </Hidden>
      <Hidden smUp>
        <Typography
          component="h1"
          align="center"
          style={textStyle(props.marginTop, "1.7rem")}
        >
          {props.text}
        </Typography>
      </Hidden>
    </React.Fragment>
  ) : (
    ""
  );
  return (
    <div style={bodyStyle}>
      {props.children}
      <div style={themedBackground}>{content}</div>
    </div>
  );
};

export default BodyLayout;
