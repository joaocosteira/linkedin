import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';

const Header = () => {
    return(
        <header className="header">

            <div className='header__left'>
                <img src="/linked_in.png" alt="" />
                <div className='header__search'>
                    <SearchIcon/>
                    <input type="text"/>
                </div>
            </div>

            <div className='header__right'>
                <HeaderOption title='Home' Icon={HomeIcon} />
                <HeaderOption title='My Network' Icon={SupervisorAccountIcon} />
                <HeaderOption title='Jobs' Icon={BusinessCenterIcon} />
                <HeaderOption title='Messaging' Icon={ChatIcon} />
                <HeaderOption title='Notifications' Icon={NotificationsIcon} />
                <HeaderOption title='me' avatar='/profile.jpeg' />
            </div>
        </header>
    )
}

export default Header;