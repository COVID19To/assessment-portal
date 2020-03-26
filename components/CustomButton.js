import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Router from "next/router";

const bgTransition = ["#FFFFFF", "#653CAD"],
  altBgTransition = ["#199473", "#147D64"];

const root = {
  width: "200px",
  height: "50px",
  color: bgTransition[1],
  backgroundColor: bgTransition[0],
  border: "1px solid " + bgTransition[1],
  borderRadius: "5px",
  textTransform: "initial",
  boxShadow: "none",
  "&:hover": {
    color: bgTransition[0],
    backgroundColor: bgTransition[1]
  }
};

const altStyle = {
  backgroundColor: "transparent",
  background: `linear-gradient(90deg, ${altBgTransition[0]} 0%, ${altBgTransition[1]} 100%)`,
  borderWidth: 0,
  borderRadius: "2px",
  color: "white",
  boxShadow: "0px 2px 2px rgba(25, 148, 115, 0.16)",
  "&:hover": {
    color: "white",
    backgroundColor: altBgTransition[1]
  }
};

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

const defaultClick = href => () => Router.push(href || "/");

const CustomButton = props => {
  const ColorButton = withStyles(() => ({
    root: Object.assign(root, props.isAlt ? altStyle : {})
  }))(Button);
  const classes = useStyles();
  return (
    <ColorButton
      variant="contained"
      color="primary"
      className={classes.margin}
      onClick={props.onClick || defaultClick(props.href)}
      style={props.buttonStyle || {}}
    >
      {props.name || ""}
    </ColorButton>
  );
};

export default CustomButton;
