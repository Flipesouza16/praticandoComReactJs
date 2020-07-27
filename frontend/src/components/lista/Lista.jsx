import React from 'react'
import './Lista.css'

import Post from './Post'

export default class Lista extends React.Component {
    render() {
        return (
            <div className="lista">
                <h1>Simple List</h1>
                <Post title="Adicione algum item na lista" title2="Lista:" />
            </div>
        )
    }
}