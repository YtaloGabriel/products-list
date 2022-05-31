import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './css/Product.module.css';

const Product = ({ urlImg, title, alt, pageLink }) => {
  return (
    <Link to={pageLink} className={`${Styles.product} animeLeft`}>
      <img src={urlImg} alt={alt} />
      <h3 className={Styles.title}>{title}</h3>
    </Link>
  );
};

export default Product;
