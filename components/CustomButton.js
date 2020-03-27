import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// Utilities
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Router from "next/router";

const bgTransition = ["#FFFFFF", "#653CAD"],
  altBgTransition = ["#199473", "#147D64"];

const buttonStyle = ({ isAlt, style }) => ({
  display: "block",
  minWidth: "140px",
  color: isAlt ? "white" : bgTransition[1],
  backgroundColor: isAlt ? "transparent" : bgTransition[0],
  border: isAlt ? "none" : `1px solid ${bgTransition[1]}`,
  background: isAlt
    ? `linear-gradient(90deg, ${altBgTransition[0]} 0%, ${altBgTransition[1]} 100%)`
    : "none",
  borderRadius: isAlt ? "2px" : "5px",
  margin: `${style && style.marginTop ? style.marginTop : isAlt ? 0 : '15px'} auto`,
  textTransform: "initial",
  boxShadow: isAlt && "0px 2px 2px rgba(25, 148, 115, 0.16)",
  fontSize: isAlt && "1.1rem",
  "&:hover": {
    color: isAlt ? "white" : bgTransition[0],
    backgroundColor: isAlt ? altBgTransition[1] : bgTransition[1]
  }
});

const defaultClick = href => () => Router.push(href || "/");

const CustomButton = props => {
  const ColorButton = withStyles(() => ({
    root: buttonStyle(props)
  }))(cProps => <Button size={props.size} variant="contained" {...cProps} />);
  return (
    <ColorButton
      variant="contained"
      color="primary"
      className="customer-button"
      onClick={props.onClick || defaultClick(props.href)}
      style={props.buttonStyle || {}}
    >
      {name || ""}
    </ColorButton>
  );
};

export default CustomButton;
