import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <h3 className={`fa fa-home`}>Inicio</h3>
            </Link>
            <Link to="form">
                <h3 className={`fa`}>Formulário</h3>
            </Link>
            <Link to="lista">
                <h3 className={`fa`}>Simple List</h3>
            </Link>
            <Link to="conversor">
                <h3 className={`fa`}>Conversor</h3>
            </Link>
        </nav>
    </aside>