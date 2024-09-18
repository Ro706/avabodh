import React from 'react'
export default function Hnav() {
  return( 
  <div className="page-wrapper">
  <div className="topbar-two">
    <div className="container">
      <div className="topbar-two__inner">
        <ul className="topbar-two__info">
          <li>
            <span className="topbar-two__info__icon">
              <i className="icofont-envelope"></i>
            </span>
            <a href="mailto:demo@example.com">demo@example.com</a>
          </li>
          <li>
            <span className="topbar-two__info__icon">
              <i className="icofont-location-pin"></i>
            </span>
            <a href="https://www.google.com/maps">27, Dhaka London City, LOT</a>
          </li>
        </ul>
        <ul className="list-unstyled topbar-two__nav">
          <li>
            <a href="login.html">Login</a>
          </li>
          <li>
            <a href="register.html">Registrar</a>
          </li>
          <li>
            <a href="donate.html">Donate</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
);
}
