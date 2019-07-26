import React, { Component } from 'react';
import axios from 'axios';

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: []
        }
    }

    componentDidMount() {
        if (Math.random(0, 1) < 0.1) {
            alert('Hubo un Error en la consulta vuelve a tratar')
        } else {
        const {uniqueID} = this.props.match.params
        axios.get(`http://localhost:8000/items/${uniqueID}`)
        .then((res) => {
            this.setState({
                item: res.data
            })
        })
        .catch((err => {
            console.log(err)
        }))
    } 
    }

    handleClick = () => {
        this.props.history.push('/');
    }

    render() {
        const {name, picture, sku, offer, ripleyOffer, fullPrice, puntos, discount, marca } = this.state.item;

        return (
            <div className="py-5 back-color">
                <button onClick={this.handleClick} className="btn btn-success">Atras</button>
                <div className="container container-detail">
                    <img src={picture} alt="ripley"/>
                    <ul className="mt-5 detail-list">
                    <li className="detail-marca detail">{marca}</li>
                    <li className="detail-name detail">{name}</li>
                    <li className="detail-sku detail">SKU: {sku}</li>
                    <li className="detail-normal detail">
                        <span className="span-normal">Normal</span>
                        <span className="span-fullPrice text-right">{fullPrice}</span>
                    </li>
                    <li className="detail-internet detail">
                        <span className="span-internet">Internet</span>
                        <span className="span-offer">{offer}</span>
                    </li>
                    <li className="detail-tarjeta detail">
                        <span className="span-tarjeta">Tarjeta Ripley</span>
                        <span className="span-ripleyOffer">{ripleyOffer}</span>
                    </li>
                    <li className="detail-descuento detail">
                        <span className="span-descuento">Descuento</span>
                        <span className="span-discount">-{discount}%</span>
                    </li>
                    <li className="detail-puntos detail">
                        <span className="span-acumulas">Acumulas</span>
                        <span className="span-puntos">{puntos} puntos</span>
                    </li>
                </ul>
                </div>
               
          </div>
        )
    }
}
