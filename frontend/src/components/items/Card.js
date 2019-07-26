import React, { Component } from 'react'
import '../../App.css'
import { Link } from 'react-router-dom';

export default class Card extends Component {
    
    render() {
            const {name, offerPrice, listPrice, discount, picture, marca, uniqueID  } = this.props.item
        return (
          <Link className="a-card" to={`/details/${uniqueID}`}>
            <div className="card mb-2">
              <div className="img-container p-5">
                  <div className="char-description mb-0 discount text-right">
                      <b className="discount-text">-{discount}%</b>
                  </div>
                  <img className="card-img-top img-list" src={picture} alt="ripley"/>
              </div>
              <div className="card-footer justify-content-center pb-5">
                <h3 className="name mb-2">
                  {marca}
                </h3>
                <h6 className="char-description title mb-0">
                  <b>{name}</b>
                </h6>
                <p className="char-description listprice mb-0">
                  <b>{listPrice}</b>
                </p>
                <p className="char-description offerprice mb-0">
                <b>{offerPrice}</b>
                </p>
              </div>
            </div>
          </Link>
        )
    }
}
