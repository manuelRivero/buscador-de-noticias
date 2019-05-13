import React from 'react'
import { Col} from 'react-materialize';


export default ({noticia}) => {
  const {source, description, title, urlToImage, url}=noticia;
  
    return (

            <Col s={12} m={6} l={4} >
                    <div className="card">
                        <div className="card-image">
                            <img src={`${urlToImage}`} alt={title}/>
                            <span className="card-title">{source.name}</span>
                        </div>
                        <div className="card-content" >
                            <h5>{title}</h5>
                            <p>{description}</p>
                        </div>
                        <div className="card-action">
                            <a href={url} target="_blank">Ver</a>
                        </div>
                     </div>
            </Col>
    )
}
