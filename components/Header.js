import LogoBox from './LogoBox';
import CustomButton from './CustomButton';

const headerBar = {
  backgroundColor: 'white',
  maxHeight: '84px',
};

const headerContainer = {
  maxWidth: '1300px',
  margin: '0 auto 20px',
  padding: '0 20px 0 10px'
};

const logoutContainer = {
  float: 'right',
  marginTop: '10px',
};

const buttonStyle = {
  width: '100px',
  height: '40px',
};

const Header = () => (
  <div style={headerBar}>
    <div style={headerContainer}>
      <LogoBox containerStyle={{ display: 'inline-block' }} imageStyle={{ width: '100px', padding: '10px' }} />
      <div style={logoutContainer}><CustomButton name="Log out" buttonStyle={buttonStyle} onClick={() => 0} /></div>
    </div>
  </div>
);

export default Header;