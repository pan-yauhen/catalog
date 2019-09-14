import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export const Header = () =>
    <header className="header d-flex flex-column flex-sm-row justify-content-between align-items-center text-center">
        <div className="d-flex flex-column flex-sm-row align-items-center">
            <Link to={''}><img src={logo} alt='logo' /></Link>
            <Link to={'/catalog'} className="my-3 my-sm-auto header-link">Весеннее поступление</Link>
        </div>
        <Link to={''} className="my-3 my-sm-auto text-capitalize header-link mr-sm-4">информация</Link>
    </header>;