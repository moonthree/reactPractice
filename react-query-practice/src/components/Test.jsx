import React from "react";
import { useTodos } from "../api";

export default function Test() {
  const { isLoading, error, data: products } = useTodos();
  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;
  return (
    <div>
      <h4>TestPage</h4>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
