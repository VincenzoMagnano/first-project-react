import React from 'react'
import './Card.css'
const Card = () => {
  return (
    <div className="card m-3" style={{width: "18rem;"}}>
        <img src="https://picsum.photos/200/300" className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">Stefy forever</h5>
        <p className="card-text">Utente appassionato di programmazione in cerca di nuove sfide</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
    </div>
  )
}

export default Card
