import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './css/Header.module.css';

const Header = () => {
  return (
    <header>
      <section className={Styles.headerContent}>
        <h1>Lista de Produtos</h1>
        <nav>
          <NavLink to="/" end className={Styles.link}>
            Produtos
          </NavLink>
          <NavLink to="contact" className={Styles.link}>
            Contato
          </NavLink>
        </nav>
      </section>
    </header>
  );
};

export default Header;
