import React from 'react'
import "./Cards.css"

const Cards = () => {
  return (
    <div className='CardCss'>
      <div className="card" style={{ width: '18rem' }}>
        <img src="https://cdn.pixabay.com/photo/2017/06/17/16/13/negroni-2412607_960_720.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text"><h5>Bebidas</h5>Descubre las bebidas especiales de temporada</p>
        </div>
      </div>
      <div className="card" style={{ width: '18rem' }}>
        <img src="https://cdn.pixabay.com/photo/2022/05/10/18/50/ramen-7187809_960_720.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text"><h5>Ramen</h5>Ramen de distintos tamaños y sabores</p>
        </div>
      </div>
      <div className="card" style={{ width: '18rem' }} href="/">
        <img src="https://cdn.pixabay.com/photo/2015/05/01/09/56/sushi-748139_960_720.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text"><h5>Rollos</h5>Más de 50 rollos a tu disposición</p>
        </div>
      </div>
      <div className="card" style={{ width: '18rem' }}>
        <img src="https://cdn.pixabay.com/photo/2016/10/31/18/14/dessert-1786311_960_720.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text"><h5>Postres</h5>Prueba deliciosos postres preparados con fruta de temporada.</p>
        </div>
      </div>
    </div>
  )
}

export default Cards