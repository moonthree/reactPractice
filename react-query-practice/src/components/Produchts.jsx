import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
import { useTodos } from "../api";

export default function Products() {
  const [checked, setChecked] = useState(false);
  const client = useQueryClient();
  const {
    isLoading: test1,
    error: test2,
    data: test3,
  } = useQuery({
    queryKey: ["testQuery", checked],
    queryFn: async () => {
      console.log("fetching....");
      return fetch(`data/${checked ? "sale_" : ""}products.json`).then((res) =>
        res.json()
      );
    },
    staleTime: 5000,
  });
  const { isLoading, error, data: products } = useTodos();
  // const {
  //   isLoading,
  //   error,
  //   data: products,
  // } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: async () => {
  //     console.log("fetching....");
  //     return fetch(`data/products.json`).then((res) => res.json());
  //   },
  //   onSuccess: () => {
  //     console.log("qwdqw");
  //   },
  // });
  const handleChange = () => setChecked((prev) => !prev);

  if (isLoading) return <p>Loading...</p>;
  if (test1) return <p>loading test</p>;

  if (error) return <p>{error.message}</p>;
  if (test2) return <p>{test2.message}</p>;

  return (
    <>
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        Show Only 🔥 Sale
      </label>
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
      <button
        onClick={() => {
          client.invalidateQueries(["products"]);
        }}
      >
        정보가 업데이트 되었음
      </button>
      <h4>test</h4>
      <ul>
        {test3.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
