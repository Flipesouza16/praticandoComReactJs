import React, { Component } from 'react'
import './Comment.css'

export default class comment extends Component {
    render() {
        return (
            <p>{this.props.text}</p>
        )
    }
} 