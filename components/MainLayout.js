// Components
import Header from './Header';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
  };

  const MainLayout = ({children}) => (
    <div style={layoutStyle}>
      {children}
    </div>
  );

  export default MainLayout;
