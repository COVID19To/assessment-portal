const centerImage = () => ({
  display: "block",
  margin: "auto",
  width: "150px",
  padding: "20px"
});

const LogoBox = props => (
  <div style={props.containerStyle || {}}>
    {console.log(props.style) || ""}
    <img src="/assets/logo.png" style={Object.assign(centerImage(), props.imageStyle || {})} />
  </div>
);

export default LogoBox;
