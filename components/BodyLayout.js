import Typography from "@material-ui/core/Typography";

const bodyStyle = {
  minHeight: '100vh',
  minWidth: '320px',
};

const themedBackground = {
  minHeight: '400px',
  height: "50vh",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  display: "block",
  background: "linear-gradient(30deg, #421987 50%, #34126F 50%)",
  zIndex: -1
};

const textStyle = {
  fontSize: "2.5rem",
  fontFamily: "Roboto",
  fontWeight: 100,
  color: "white",
  marginTop: "5vh"
};

const BodyLayout = props => {
  const content = props.text ? (
    <Typography component="h1" align="center" style={Object.assign(textStyle, props.textStyle || {})}>
      {props.text}
    </Typography>
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
