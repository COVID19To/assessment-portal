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

const LogoBox = ({ imageStyle, containerStyle }) => (
  <div style={containerStyle || {}}>
    <img src="/assets/logo.png" style={centerImage(imageStyle)} />
  </div>
);

export default LogoBox;
