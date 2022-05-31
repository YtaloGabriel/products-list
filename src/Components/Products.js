import React from 'react';
import Styles from './css/Products.module.css';
import Head from './Head';
import Loading from './Loading';
import Product from './Product';

const Products = () => {
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function handleProducts(url) {
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
    handleProducts('https://ranekapi.origamid.dev/json/api/produto');
  }, []);

  if (product === null && !loading) return null;
  if (product === null && loading) return <Loading />;
  return (
    <section className={`${Styles.products} content`}>
      <Head
        title="Lista de Produtos"
        description="Esta é a página principal do site, listando todos os produtos disponíveis."
      />
      {product.map((item) => {
        return (
          <Product
            key={item.id}
            urlImg={item.fotos[0].src}
            alt={item.fotos[0].titulo}
            title={item.nome}
            pageLink={`product/${item.id}`}
          />
        );
      })}
    </section>
  );
};

export default Products;
