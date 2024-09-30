import { useLocation } from 'react-router-dom';
import Header from './Header';

function HeaderController() {
  const location = useLocation();
  const showHeader = location.pathname !== '/';

  return showHeader ? <Header /> : null;
}

export default HeaderController;