const BoxLayout = ({ children }) => (
  <div style={{ padding: "20px" }}>
    <div className="box-layout">{children}</div>
    <style jsx>{`
      .box-layout {
        margin: 20vh auto 0;
        padding: 20px;
        max-width: 500px;
        min-width: 280px;
        border: 1px solid #ddd;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
          0px 2px 2px 0px rgba(0, 0, 0, 0.14),
          0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      }
    `}</style>
  </div>
);

export default BoxLayout;
