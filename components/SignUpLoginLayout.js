// Components
import Box from "@material-ui/core/Box";
import BodyLayout from "./BodyLayout";
import BoxLayout from "./BoxLayout";
import Copyright from "./Copyright";
import LogoBox from "./LogoBox";

const containerStyle = {
  paddingBottom: "20px",
  borderBottom: "1px solid rgb(221, 221, 221)"
};

const SignUpLoginLayout = ({ children }) => {
  const box = (
    <BoxLayout>
      <LogoBox containerStyle={containerStyle} />
      <div>{children}</div>
      <Box mt={6}>
        <Copyright />
      </Box>
    </BoxLayout>
  );
  return <BodyLayout text="Welcome">{box}</BodyLayout>;
};

export default SignUpLoginLayout;
