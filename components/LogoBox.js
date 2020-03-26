const centerImage = {
  display: "block",
  margin: "auto",
  width: "150px",
  padding: "20px"
};

const LogoBox = props => (
  <div style={props.containerStyle || {}}>
    <img src="/assets/logo.png" style={Object.assign(centerImage, props.imageStyle || {})} />
  </div>
);

export default LogoBox;
