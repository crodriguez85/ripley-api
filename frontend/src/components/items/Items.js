import React, { Component } from 'react';
import axios from 'axios';
import Card from '../items/Card'


export default class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        if (Math.random(0, 1) < 0.1) {
            alert('Hubo un Error en la consulta vuelve a tratar')
        } else {
            axios.get('/items')
            .then((res) => {
                this.setState({
                    items: res.data.items,
                })
            })
            .catch((err => {
                console.log(err)
            }))
        }
    }

    render() {
        const items = this.state.items;

        return (
            <div className="py-5 back-color">
            <div className="container">
              <div className="row">
                {items.map(item => <Card
                  key={item.id}
                  item={item}
                />)}
              </div>
            </div>
          </div>
        )
    }
}
