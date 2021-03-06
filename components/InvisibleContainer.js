const container = {
  display: "block",
  margin: "180px auto 0",
  padding: '0 20px',
  maxWidth: "800px",
  minWidth: "300px",
  backgroundColor: "transparent"
};

const invisibleLayout = ({ children }) => <div style={container}>{children}</div>;

export default invisibleLayout;
