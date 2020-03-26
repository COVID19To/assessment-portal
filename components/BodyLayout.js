import Typography from "@material-ui/core/Typography";

const themedBackground = {
    minHeight: '40vh',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    display: 'block',
    background: 'linear-gradient(45deg, #421987 50%, #34126F 50%)',
    zIndex: -1,
};

const BodyLayout = ({text, children}) => {
  const content = text ? (
    <Typography component="h1" align="center" style={{ color: 'white' }}>
      {text}
    </Typography>
  ) : (
    ""
  );
  return (
    <div>
      {children}
      <div style={themedBackground}>{content}</div>
    </div>
  );
};

export default BodyLayout;
