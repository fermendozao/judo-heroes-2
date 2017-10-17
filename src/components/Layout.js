import React from 'react';
import { Link } from 'react-router-dom';

export const Layout = props => (
  <div className="app-container">
    <header className="main-header">
      <div className="logo">
        <Link to="/">
          <img
            src="/img/logo.png"
            width="180"
            alt="Haz clic aquí para volver a la página de inicio"
          />
        </Link>
      </div>
    </header>
    <div className="app-content">{props.children}</div>
    <footer>
      <p>
        This is a demo app to showcase <strong>universal Javascript</strong>
        with <strong>React</strong> and <strong>Express</strong>.
      </p>
    </footer>
  </div>
);

export default Layout;
