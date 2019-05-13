import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Card, Col, Row, Container} from 'materialize-css';

export default class Notificacion extends Component {
  static propTypes = {
    mensaje: PropTypes.string.isRequired,
  }

  render() {
    return (
        <div className="container">
            <div class="row">
                    <div class="col s12 m6 offset-m3">
                    <div class="card-panel teal">
                        <span class="white-text">
                        {this.props.mensaje}
                        </span>
                    </div>
                    </div>
            </div>
        </div>
    )
  }
}
