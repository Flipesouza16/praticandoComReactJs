import React, { Component } from 'react'

import Comment from './Comment'

export default class Post extends Component {

    constructor(props) {
        super(props)

        this.state = {
            comments: [],
            newCommentText: ''
        }
    }

    handleSubmit(e) {
        this.setState({
            comments: [
                ...this.state.comments,
                { text: this.state.newCommentText }
            ]
        })

        this.setState({ newCommentText: '' })

        e.preventDefault()
    }

    handleTextChange(e) {
        this.setState({ newCommentText: e.target.value })
    }

    render() {
        return (
            <div className="mainComponent">
                <div className="post">
                    <h2>{this.props.title}</h2>

                    <form onSubmit={e => this.handleSubmit(e)}>
                        <input
                            value={this.state.newCommentText}
                            onChange={e => this.handleTextChange(e)}
                        />
                        <button type="submit">OK</button>
                    </form>
                </div>

                <div className="post newLista">
                    <h2>{this.props.title2}</h2>
                    {this.state.comments.map((comment, index) => {
                        return <ul>
                            <li><Comment key={index} text={comment.text} /></li>
                        </ul>
                    })}
                </div>
            </div>
        )
    }
}