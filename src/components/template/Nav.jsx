import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/users">
                <i className="fa fa-user"></i> Usúarios
            </Link>
            <Link to="/investment">
                <i className="fa fa-handshake-o"></i> Simulador de Investimentos
            </Link>
        </nav>
    </aside>