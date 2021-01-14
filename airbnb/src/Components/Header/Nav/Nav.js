import React from 'react';
import './Nav.css';
import logo from '../img/logo.png';
import LanguageIcon from '@material-ui/icons/Language';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Nav() {
    return (
        <div className="nav">
            <div className="nav__logo">
                <img src={logo} alt="airbn logo" />
            </div>

            <div className="nav__middle">
                <h3 className="nav__middlePlaces h3">Places to stay</h3>
                <h3 className="h3">Expereinces</h3>
                <h3 className="h3">Online Expereinces</h3>
            </div>

            <div className="nav__right">
                <h3 className="h3">Become a host</h3>
                <LanguageIcon className="languageIcon" />
                <div className="nav__rightAccount" >
                    <MenuIcon className="nav__rightAccountIcon"/>
                    <AccountCircleIcon className="nav__rightAccountIcon"/>
                </div>
            </div>
        </div>
    )
}

export default Nav
