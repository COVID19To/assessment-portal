const centerImage = modifier =>
  Object.assign(
    {
      display: "block",
      margin: "auto",
      width: "150px",
      padding: "20px"
    },
    modifier || {}
  );

const LogoBox = props => (
  <div style={props.containerStyle || {}}>
    <img
      src="/assets/logo.png"
      style={centerImage(props.imageStyle)}
    />
  </div>
);

export default LogoBox;
