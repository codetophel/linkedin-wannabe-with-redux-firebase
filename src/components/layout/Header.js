import {
  BusinessCenter,
  Chat,
  Home,
  Notifications,
  Search,
  SupervisorAccount,
} from '@mui/icons-material';
import HeaderOptions from './HeaderOptions';
import './Header.css';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice';
import { auth } from '../../db/firebase';

const Header = () => {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className='header'>
      <div className='header-left'>
        <img
          src='https://cdn.cdnlogo.com/logos/l/66/linkedin-icon.svg'
          alt='linkedin-icon'
        />
        <div className='header-search'>
          <Search />
          <input type='text' placeholder='Search...' />
        </div>
      </div>
      <div className='header-right'>
        <HeaderOptions title='Home' icon={<Home />} />
        <HeaderOptions title='My Network' icon={<SupervisorAccount />} />
        <HeaderOptions title='Jobs' icon={<BusinessCenter />} />
        <HeaderOptions title='Messaging' icon={<Chat />} />
        <HeaderOptions title='Notifications' icon={<Notifications />} />
        <HeaderOptions title='Me' avatar={true} onClick={logoutOfApp} />
      </div>
    </div>
  );
};

export default Header;
