import React, {Component} from 'react';
import {Row, Input, Col} from 'react-materialize';
import PropTypes from 'prop-types'; 


class Formulario extends Component{
  selectRef=React.createRef()
  handle = (e) =>{
    console.log(this.selectRef.current.value);
    this.props.getNoticias(e.target.value)
  }

render(){

  return (
    <Row>
        <Col s={12} m={8} offset="m2">
            
            <Row>
                <div class="input-field col s12">
                <Input s={12} type='select' ref={this.selectRef}  label="Categoria" defaultValue='general' onChange={this.handle}>
                        <option value="general" disabled selected>General</option>
                        <option value="sports">Sports</option>
                        <option value="technology">Technology</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="health">Health</option>
                        </Input>
                </div>
            </Row>
        </Col>

            
    </Row>
  )
  }
}

Formulario.propTypes = {
  addConsulta:PropTypes.func.isRequired
}

export default Formulario;
