import React from 'react';
import Styles from './css/Footer.module.css';

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      Lista de Produtos. Alguns direitos reservados.
      <br />
      Projeto do curso de React da Origamid.com.
    </footer>
  );
};

export default Footer;
