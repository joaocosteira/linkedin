import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Header = () => {

    const dispatch = useDispatch();
    const logoutFromApp = () => { 
        dispatch(logout());
        signOut(auth);
    }

    return(
        <header className="header">

            <div className='header__left'>
                <img src="/linked_in.png" alt="" />
                <div className='header__search'>
                    <SearchIcon/>
                    <input type="text" placeholder='Search'/>
                </div>
            </div>

            <div className='header__right'>
                <HeaderOption title='Home' Icon={HomeIcon} />
                <HeaderOption title='My Network' Icon={SupervisorAccountIcon} />
                <HeaderOption title='Jobs' Icon={BusinessCenterIcon} />
                <HeaderOption title='Messaging' Icon={ChatIcon} />
                <HeaderOption title='Notifications' Icon={NotificationsIcon} />
                <HeaderOption onClick={logoutFromApp} title='me' avatar/>
            </div>
        </header>
    )
}

export default Header;