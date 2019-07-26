import React, { Component } from 'react'
import logo from '../../img/logo.png';
import '../../App.css';
export default class Header extends Component {
    render() {
        return <nav className="navbar navbar-expand-sm px-sm-5 d-flex justify-content-center">
        <img src={logo} alt="HA" className="navbar-brand"/>
        <h1 className="titulo-test">Consumiendo API Simple Ripley Test</h1>
    </nav>
    }
}
