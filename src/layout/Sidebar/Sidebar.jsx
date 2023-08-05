import design from './sidebar.module.css';
import { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Sidebar = () => {
  const reloadPage = () => {
    window.location.reload();
  };
  const [activeItem, setActiveItem] = useState('');
  const [isExpanded, setIsExpanded] = useState(true);
  const [isPermanent, setIsPermanent] = useState(false);
  const location = useLocation();

  //Logout Functionality
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/login');
  };

  // sidebar expansion
  const toggleSidebar = () => {
    if (window.innerWidth <= 700) {
      setIsPermanent(true);
      return;
    }
    setIsExpanded(!isExpanded);
  };

  // useEffect(() => {
  //   if (window.innerWidth <= 700) {
  //     setIsPermanent(true);
  //   } else {
  //     setIsPermanent(false);
  //   }
  // }, []);

  // Listen for window resize events to update isExpanded and isPermanentShrunk states when the width changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setIsExpanded(false); // Always set isExpanded to false if width is 700px or lower
        setIsPermanent(true); // Set isPermanentShrunk to true when the width is 700px or lower
      } else {
        setIsPermanent(false); // Set isPermanentShrunk to false when the width is larger than 700px
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // update activeItem based on current location
  useEffect(() => {
    if (location.pathname === '/dashboard') {
      setActiveItem('dashboard');
    } else if (location.pathname === '/announcement') {
      setActiveItem('announcement');
    } else if (
      location.pathname === '/courses' ||
      location.pathname.startsWith('/courses')
    ) {
      setActiveItem('courses');
    } else if (location.pathname === '/teams') {
      setActiveItem('teams');
    } else if (location.pathname === '/meeting') {
      setActiveItem('meeting');
    } else if (
      location.pathname === '/students' ||
      location.pathname.startsWith('/student-details/')
    ) {
      setActiveItem('students');
    } else if (
      location.pathname === '/certificate' ||
      location.pathname.startsWith('/certificate')
    ) {
      setActiveItem('certificate');
    } else if (location.pathname === '/chat') {
      setActiveItem('chat');
    } else if (location.pathname === '/profile') {
      setActiveItem('profile');
    } else if (location.pathname === '/settings') {
      setActiveItem('settings');
    }
  }, [location]);

  // define active and inactive colors
  const activeBackgroundColor = '#671ae4';

  // set style for active link
  const activeLinkStyle = {
    backgroundColor: activeBackgroundColor,
    textDecoration: 'none',
    color: '#fff',
    transition: '.5s ease',
  };

  const isMobileView = window.innerWidth <= 450;

  return (
    <div
      className={`${design.Sidebar_wrapper} ${
        isExpanded ? '' : design.shrunk
      } ${isPermanent && 'permanent '}`}
    >
      {' '}
      {isExpanded ? (
        <MenuOpenOutlinedIcon
          style={{ fontSize: '40px', cursor: 'pointer', marginBottom: '0px' }}
          onClick={toggleSidebar}
        />
      ) : (
        <div className={design.close}>
          {' '}
          <MenuOutlinedIcon
            style={{
              fontSize: '40px',
            }}
            onClick={toggleSidebar}
          />
        </div>
      )}
      {/* {isExpanded && ( */}
      <>
        {isExpanded && (
          <h1 className={design.SideLogo} onClick={reloadPage}>
            GIG<span>Nexus</span>
          </h1>
        )}

        {/* Icons for toggling sidebar */}

        <div className={design.menuItems}>
          {' '}
          <div>
            <Link
              className={design.Sidebar_tabs}
              to='/dashboard'
              style={activeItem === 'dashboard' ? activeLinkStyle : {}}
            >
              {' '}
              <div className={design.Sidebar_tabs_inner}>
                <HomeWorkOutlinedIcon
                  style={{ fontSize: isMobileView ? '40px' : '24px' }}
                />

                {isExpanded && <h3>Home</h3>}
              </div>
            </Link>
          </div>
          <div>
            <Link
              className={design.Sidebar_tabs}
              to='/dashboards'
              style={activeItem === 'dashboards' ? activeLinkStyle : {}}
            >
              <div className={design.Sidebar_tabs_inner}>
                {/* <img src={Profile} /> */}
                <AccountTreeOutlinedIcon
                  style={{ fontSize: isMobileView ? '40px' : '24px' }}
                />
                {isExpanded && <h3>Projects</h3>}
              </div>
            </Link>
          </div>
          <div>
            <Link
              className={design.Sidebar_tabs}
              to='/courses'
              style={activeItem === 'courses' ? activeLinkStyle : {}}
            >
              <div className={design.Sidebar_tabs_inner}>
                <ChatOutlinedIcon
                  style={{ fontSize: isMobileView ? '40px' : '24px' }}
                />
                {isExpanded && <h3>Messages</h3>}
              </div>{' '}
            </Link>
          </div>
          <div>
            <Link
              className={design.Sidebar_tabs}
              to='/teams'
              style={activeItem === 'teams' ? activeLinkStyle : {}}
            >
              <div className={design.Sidebar_tabs_inner}>
                <AccountCircleOutlinedIcon
                  style={{ fontSize: isMobileView ? '40px' : '24px' }}
                />
                {isExpanded && <h3>Profile</h3>}
              </div>{' '}
            </Link>
          </div>
          <div>
            <Link
              className={design.Sidebar_tabs}
              to='/meeting'
              style={activeItem === 'meeting' ? activeLinkStyle : {}}
            >
              <div className={design.Sidebar_tabs_inner}>
                <ContactSupportOutlinedIcon
                  style={{ fontSize: isMobileView ? '40px' : '24px' }}
                />
                {isExpanded && <h3>Support</h3>}
              </div>{' '}
            </Link>
          </div>
          <div>
            <Link
              className={design.Sidebar_tabs}
              to='/students'
              style={activeItem === 'students' ? activeLinkStyle : {}}
            >
              <div className={design.Sidebar_tabs_inner}>
                <MonetizationOnOutlinedIcon
                  style={{ fontSize: isMobileView ? '40px' : '24px' }}
                />
                {isExpanded && <h3>Earnings</h3>}
              </div>{' '}
            </Link>
          </div>
          <div>
            <Link
              className={design.Sidebar_tabs}
              to='/certificate'
              style={activeItem === 'certificate' ? activeLinkStyle : {}}
            >
              <div className={design.Sidebar_tabs_inner}>
                <SettingsSuggestOutlinedIcon
                  style={{ fontSize: isMobileView ? '40px' : '24px' }}
                />
                {isExpanded && <h3>Settings</h3>}
              </div>
            </Link>
          </div>
          <div className={design.Sidebar_tabs} onClick={handleLogout}>
            <LogoutOutlinedIcon
              style={{ fontSize: isMobileView ? '40px' : '24px' }}
            />
            {isExpanded && <h3>Log out</h3>}
          </div>
        </div>
      </>
      {/* )} */}
    </div>
  );
};

export default Sidebar;
