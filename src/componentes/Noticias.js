import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Noticia from './Noticia';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

export default class Noticias extends Component {
  static propTypes = {
    noticias: PropTypes.array.isRequired
  }

  renderNoticias = () => {
    return (
      <TransitionGroup >
        {
          this.props.noticias.map( (noticia, index )=> (
            <CSSTransition className="fade" timeout={500} key={index}>
              <Noticia  noticia={noticia}/>
            </CSSTransition>
            ))
        }
      </TransitionGroup>
    )
  }

  render() {
    return (
      <div className="row">
                 {this.renderNoticias()}
      </div>
    )
  }
}
