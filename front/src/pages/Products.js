import React, { useState, useEffect, useContext } from 'react';
import { Card } from '../components/Card';
import './Product.scss';
import { UserContext } from '../context/UserContext';

export const Products = () => {
  const url = '/api/products';
  const [products, setProducts] = useState({ data: [], state: 'loading' });
  const { user } = useContext(UserContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const resp = await fetch(url, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    });
    const data = await resp.json();

    const productsFromBE = data.products.map((resp) => {
      return {
        id: resp.id,
        title: resp.id,
        url: resp.thumbnail,
        price: `${resp.price} ${resp.currency_id}`,
      };
    });
    setProducts({ data: productsFromBE, state: 'done' });
  };
  return (
    <>
      <div className='products'>
        <h1>Products</h1>
        {!navigator.onLine && (
          <span className='badge bg-warning text-dark'>You are offline</span>
        )}
        {products.state === 'done' && (
          <div className='products-card-container'>
            {products.data.map((elm, index) => (
              <Card
                key={`${index}${elm.id}`}
                title={elm.title}
                url={elm.url}
                description={elm.price}
              ></Card>
            ))}
          </div>
        )}
        {products.state === 'loading' && <p>Loading ...</p>}
      </div>
    </>
  );
};
