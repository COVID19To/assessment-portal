import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Router from "next/router";

const localStyle = ({ isGoogleLogin, isAlt, style }) => ({
  display: "block",
  width: isGoogleLogin && "80%",
  minWidth: "140px",
  color: isAlt ? "white" : "#653CAD",
  backgroundColor: isAlt ? "transparent" : "white",
  border: isAlt ? "none" : "1px solid #653CAD",
  background: isAlt
    ? "linear-gradient(90deg, #199473 0%, #147D64 100%)"
    : "none",
  borderRadius: isAlt ? "2px" : "5px",
  margin: `${
    style && style.marginTop
      ? style.marginTop
      : isAlt
      ? 0
      : isGoogleLogin
      ? "40px"
      : "15px"
  } auto 0`,
  textTransform: "initial",
  boxShadow: isAlt && "0px 2px 2px rgba(25, 148, 115, 0.16)",
  fontSize: isAlt && "1.1rem",
  "&:hover": {
    color: "white",
    backgroundColor: isAlt ? "#147D64" : "#653CAD"
  }
});

const defaultClick = href => () => Router.push(href || "/");

const CustomButton = props => {
  const { size, onClick, href, isGoogleLogin, name, buttonStyle } = props;
  const ColorButton = withStyles(() => ({
    root: localStyle(props)
  }))(cProps => <Button size={size} variant="contained" {...cProps} />);
  return (
    <ColorButton
      variant="contained"
      color="primary"
      className="customer-button"
      onClick={onClick || defaultClick(href)}
      style={buttonStyle || {}}
    >
      {isGoogleLogin ? (
        <span>
          <span
            style={{
              display: "inline-block",
              width: "30px",
              verticalAlign: "middle",
              paddingTop: "5px"
            }}
          >
            <img style={{ width: "100%" }} src="/assets/google.png" />
          </span>
          <span
            style={{
              display: "inline-block",
              width: "calc(100% - 30px)",
              verticalAlign: "middle"
            }}
          >
            {name || ""}
          </span>
        </span>
      ) : (
        name || ""
      )}
    </ColorButton>
  );
};

export default CustomButton;
