import LogoBox from "./LogoBox";
import { GoogleLogout } from "react-google-login";
import Router from "next/router";
import CustomButton from "./CustomButton";

const headerBar = {
  backgroundColor: "white",
  maxHeight: "84px"
};

const headerContainer = {
  maxWidth: "1300px",
  margin: "0 auto 20px",
  padding: "0 20px 0 10px"
};

const logoutContainer = () => ({
  float: "right",
  marginTop: "10px"
});

const buttonStyle = {
  width: "100px",
  height: "40px"
};

const Header = () => {
  const logout = () => {
    console.log('logging out');
    Router.replace("/login");
  };
  return (
    <div style={headerBar}>
      <div style={headerContainer}>
        <LogoBox
          containerStyle={{ display: "inline-block" }}
          imageStyle={{ width: "100px", padding: "10px" }}
        />
        <div style={logoutContainer()}>
          <GoogleLogout
            clientId="13064702254-8jmahupmn4dcoa4vgbg8qhjj737kupm5.apps.googleusercontent.com"
            render={renderProps => (
              <CustomButton
                name="Log out"
                buttonStyle={buttonStyle}
                onClick={renderProps.onClick}
              />
            )}
            buttonText="Logout"
            onLogoutSuccess={logout}
            style={{ backgroundColor: "black", width: "100%" }}
          ></GoogleLogout>
        </div>
      </div>
    </div>
  );
};

export default Header;

// import LogoBox from "./LogoBox";
// import { GoogleLogout } from "react-google-login";
// import Router from "next/router";
// import { withStyles } from "@material-ui/core/styles";
// import Box from "@material-ui/core/Box";

// const headerBar = {
//   backgroundColor: "white",
//   maxHeight: "84px"
// };

// const headerContainer = {
//   maxWidth: "1300px",
//   margin: "0 auto 20px",
//   padding: "0 20px 0 10px"
// };

// const logoutContainer = {
//   float: "right",
//   marginTop: "10px"
// };

// const buttonStyle = {
//   width: "100px",
//   height: "40px"
// };

// {
//   /* <style jsx>{`
//   button {
//     display: block;
//     min-width: 140px;
//     color: #653CAD;
//     backgroundColor: "#FFFFFF;
//     border: 1px solid #653CAD;
//     background: none;
//     borderRadius: 5px;
//     margin: '15px';
//     textTransform: initial;
//   }
//   button:hover {
//     color: white;
//     backgroundColor: #653CAD;
//   }
// `}</style> */
// }
// const buttonLikeStyle = () => ({
//   position: "relative",
//   display: "block",
//   minWidth: "140px",
//   height: "40px",
//   color: "#653CAD",
//   backgroundColor: "white",
//   border: "1px solid #653CAD",
//   background: "none",
//   borderRadius: "5px",
//   margin: "15px auto",
//   textTransform: "initial",
//   "&:hover": {
//     color: "white",
//     backgroundColor: "#653CAD"
//   }
// });

// const mockButtonText = () => ({
//   position: "absolute",
//   width: "100%",
//   top: "10px",
//   textAlign: "center"
// });

// const Header = () => {
//   const logout = () => {
//     Router.replace("/login")
//   };

//   const LogOutButtonStyle = withStyles(() => ({
//     root: buttonLikeStyle()
//   }))(cProps => <Box component="div" display="inline" {...cProps} />);

//   return (
//     <div style={headerBar}>
//       <div style={headerContainer}>
//         <LogoBox
//           containerStyle={{ display: "inline-block" }}
//           imageStyle={{ width: "100px", padding: "10px" }}
//         />
//         <div style={logoutContainer}>
//           <LogOutButtonStyle className="mock-button">
//             <div style={mockButtonText()}>Log out</div>
//             <div style={{ opacity: 0 }}>
//               <GoogleLogout
//                 clientId="13064702254-8jmahupmn4dcoa4vgbg8qhjj737kupm5.apps.googleusercontent.com"
//                 buttonText="Logout"
//                 onLogoutSuccess={logout}
//                 style={{ backgroundColor: "black", width: "100%" }}
//               ></GoogleLogout>
//             </div>
//           </LogOutButtonStyle>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
