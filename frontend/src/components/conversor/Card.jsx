import React, { Component } from 'react'

export default class Card extends Component {

    constructor(props) {
        super(props)

        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0
        }

        this.converter = this.converter.bind(this)
    }

    converter() {
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`

        let url = `https://free.currconv.com/api/v7/convert?apiKey=f7cdad252688c9f4315f&q=${de_para}&compact=y`

        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(json => {
                let cotacao = json[de_para].val
                let moedaB_valor = (parseFloat(this.state.moedaA_valor * cotacao)).toFixed(2)
                this.setState({ moedaB_valor })
            })
    }

    render() {
        return (
            <div className="conversor">
                <h1>{this.props.moedaA} para {this.props.moedaB}</h1>

                <div className="input-group">
                    <input type="text" onChange={(event) => {
                        this.setState({
                            moedaA_valor: event.target.value
                        })
                    }}></input>

                    <input type="button" value="convertido" onClick={this.converter} />
                </div>

                {this.props.moedaA === "BRL" ? <h2>{this.state.moedaB_valor} $</h2> : <h2>{this.state.moedaB_valor} R$</h2>}

            </div>
        )
    }
}