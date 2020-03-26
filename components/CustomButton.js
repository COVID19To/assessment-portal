// Components
import Button from "@material-ui/core/Button";

// Utilities
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Router from "next/router";

const bgTransition = ["#FFFFFF", "#653CAD"];

const ColorButton = withStyles(() => ({
  root: {
    width: '200px',
    height: '50px',
    color: bgTransition[1],
    backgroundColor: bgTransition[0],
    border: '1px solid ' + bgTransition[1],
    borderRadius: '5px',
    textTransform: 'initial',
    boxShadow: 'none',
    "&:hover": {
      color: bgTransition[0],
      backgroundColor: bgTransition[1]
    }
  }
}))(Button);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

const defaultClick = href => () => Router.push(href || "/");

const CustomButton = ({onClick, href, name}) => {
  const {margin} = useStyles();
  return (
    <ColorButton
      variant="contained"
      color="primary"
      className={margin}
      onClick={onClick || defaultClick(href)}
    >
      {name || ""}
    </ColorButton>
  );
};

export default CustomButton;
