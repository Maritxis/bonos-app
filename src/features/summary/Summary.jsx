import React from 'react';
import './Summary.scss';
import { userData } from '../../fake-data/userdata';

const Summary = () => {
  return (
    <div className="summary-container">
      <div className="summary-header">
        <h2>Bienvenida</h2>
      </div>
      <div className="summary">
        <div className="summary__avatar">
          <img src="https://pbs.twimg.com/profile_images/825530213698240512/Ffink0QB_400x400.jpg" alt={userData.nick}/>
          <div className="summary__name">
            <span>{`${userData.name} ${userData.lastname}`}</span>
          </div>
        </div>
        <div className="summary__state">
          
          <div className="summary__available summary-info">
            <div className="summary__available counter">
              2
            </div>
            <span>Saldo disponible</span>
          </div>
          <div className="summary__books summary-info">
            <div className="summary__books counter">
              1
            </div>
            <span>Reservas esta semana</span>
          </div>
          <div className="summary__notifications summary-info">
            <div className="summary__notifications counter">
              4
            </div>
            <span>Notificaciones pendientes</span>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Summary;