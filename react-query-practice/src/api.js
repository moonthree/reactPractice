import { useQuery } from "@tanstack/react-query";

export const useTodos = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      console.log("fetching....");
      return fetch(`data/products.json`).then((res) => res.json());
    },
    onSuccess: () => {
      console.log("qwdqw");
    },
  });
