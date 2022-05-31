import React from 'react';
import Styles from './css/Contact.module.css';
import Image from '../assets/contact.jpeg';
import Head from './Head';

const Contact = () => {
  return (
    <section className={`${Styles.container} content animeLeft`}>
      <Head
        title="Entre em Contato"
        description="Página de contato e informações."
      />
      <img src={Image} alt="Imagem de um telefone antigo pendurado." />
      <section className={Styles.info}>
        <h2>Informações Para Contato</h2>
        <p className={Styles.name}>Ytalo Gabriel</p>
        <p>(82) 98189-5621</p>
        <p>São Miguel dos Campos, Alagoas</p>
        <p>12345-678</p>
      </section>
    </section>
  );
};

export default Contact;
