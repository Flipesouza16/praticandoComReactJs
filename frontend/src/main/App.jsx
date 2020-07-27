import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

import Logo from '../components/Logo'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Routes from './Routes'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Header />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>
