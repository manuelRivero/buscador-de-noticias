import React, { Component } from 'react';
import Header from './Header';
import Noticias from './Noticias';
import 'materialize-css/dist/css/materialize.css'
import M from 'materialize-css/dist/js/materialize';
import {Container, Col, Preloader} from 'react-materialize';
import Formulario from './Formulario';
import Notificacion  from './Notificacion';

const api_key= "d78b94d683b5428086662d8d8517e8e2";
class App extends Component {

  state={
    noticias:null,
    error:false,
    online:null
  }

  
  getNoticias= (consulta = 'general' )=>{

    let contry="us",category=consulta;
    const api_key= "d78b94d683b5428086662d8d8517e8e2";
    const url=`https://newsapi.org/v2/top-headlines?country=${contry}&category=${category}&apiKey=${api_key}`
    console.log(url)
    fetch(url).then( res=> res.json()).then(res => {
      if(res.status === "ok"){
        this.setState({
          noticias:res.articles
        })
      }
    } )
  }
  checkOnline = ()=>{
    if(navigator.onLine) {
      this.goOnline()
      return true;
  } else {
    this.goOffline()
    return false;
  }
  }
  renderOnline = () => {
    const {noticias} =this.state;
     return(
       <div>
         <Formulario getNoticias={this.getNoticias}/>
          {noticias ? <Noticias noticias={noticias} style={{marginTop:'50px'}}/> : 
          <Col className="center" style={{marginTop:'50px'}}>
              <Preloader size='big'/>
          </Col>}
       </div>  
     )        
  }
  renderNotification = () => {
      return (
        <Notificacion mensaje="parece que no estas conectado a ninguna red" />
      )
  }
  goOnline = () => {
     this.setState({
       online:true
     })
  }
  goOffline = () => {
    this.setState({
      online:false
    })
  }

  componentDidMount(){
   (this.checkOnline())&& this.getNoticias();
   
    window.addEventListener('offline', this.goOffline);
    window.addEventListener('online', this.goOnline);
  }

  componentDidUpdate( prev_props, prev_state){
    (prev_state.online === false && this.state.online === true) && this.getNoticias();
    M.AutoInit()

  }
  render() {
    const {online, noticias} =this.state;
    return (
      <div className="App">
          <Header tittle="Noticias App"/>
          <Container>
                { //(!online && !noticias) ? 
                   //this.renderNotification() //:
                  this.renderOnline() 
                }
                
          </Container>
      </div>
    );
  }
}

export default App;
