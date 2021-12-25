import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

function NavBar() {
  return (
    <div className="container-fluid navbar-container">
      <div className="container">
        <div className="row p-3">
          <div className="col d-flex align-items-center justify-content-center mt-2 mb-2">
            <Link to={`/`} className="navbar-link">
              <img
                src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
                width="36"
                height="28"
                alt=""
              />
              <span className="navbar-text-logo m-2">PLATAFORMA-A13</span>
            </Link>
          </div>
          <div className="col d-flex align-items-center justify-content-center mt-2 mb-2">
            <Link to={`/learn`} className="navbar-link">
              Aprender
            </Link>
            <Link to={`/blog`} className="navbar-link">
              Blog
            </Link>
            <Link to={`/faq`} className="navbar-link">
              FAQ
            </Link>
            <Link to={`/landing`} className="navbar-link">
              Sobre
            </Link>
          </div>
          <div className="col d-flex align-items-center justify-content-center mt-2 mb-2">
            <Link to={`/login`} className="navbar-link me-3">
              Entrar
            </Link>
            <Link to={`/register`} className="navbar-link navbar-button-rounded">
              Criar conta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
