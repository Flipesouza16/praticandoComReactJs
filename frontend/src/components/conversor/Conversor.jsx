import React, { Component } from 'react'
import './Conversor.css'

import Card from './Card'

export default class Conversor extends Component{
    render() {
        return(
            <div className="appList">
                <h1>Conversor de moedas</h1>
                <div className="linha">
                    <Card moedaA="USD" moedaB="BRL"></Card>
                    <Card moedaA="BRL" moedaB="USD"></Card>
                </div>
            </div>
        )
    }
}