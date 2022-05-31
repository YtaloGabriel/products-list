import React from 'react';
import { useParams } from 'react-router-dom';
import Styles from './css/ProductInfo.module.css';
import Loading from './Loading';
import Head from './Head';

const ProductInfo = () => {
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const params = useParams();

  React.useEffect(() => {
    async function handleProduct(url) {
      try {
        setLoading(true);
        const data = await fetch(url);
        const json = await data.json();
        setProduct(json);
      } catch (err) {
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
    handleProduct(
      `https://ranekapi.origamid.dev/json/api/produto/${params.id}`,
    );
  }, [params]);

  if (!product && !loading) return null;
  if (!product && loading) return <Loading />;
  return (
    <section className={`${Styles.content} content animeLeft`}>
      <div>
        {product.fotos.map((foto) => {
          return <img src={foto.src} alt={foto.titulo} key={foto.titulo} />;
        })}
      </div>
      <section className={Styles.productInfo}>
        {/* Checks if product exists, case positive, alter the page title to product name.*/}
        {product ? (
          <Head
            title={product.nome}
            description={`Página destinada ao produto ${product.nome}.`}
          />
        ) : null}

        <h3>{product.nome}</h3>
        <span>R$ {product.preco}</span>
        <p>{product.descricao}</p>
      </section>
    </section>
  );
};

export default ProductInfo;
