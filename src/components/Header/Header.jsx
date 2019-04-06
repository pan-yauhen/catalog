import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export const Header = () =>
    <header className="header d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
            <Link to={''}><img src={logo} alt='logo' /></Link>
            <Link to={''} className="header-link">Весеннее поступление</Link>
        </div>
        <Link to={''} className="text-capitalize header-link mr-4">информация</Link>
    </header>;