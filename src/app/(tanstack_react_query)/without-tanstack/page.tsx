"use client";

import { useEffect, useState } from "react";

// BASE_URL https://fakestoreapi.com/products?limit=5&page=1
interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    const abortController = new AbortController();
    setIsLoading(true);
    fetch(`https://fakestoreapi.com/products?limit=${limit}&page=${page}`, {
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts((prevProducts) => [...prevProducts, ...data]);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setError(error);
          setIsLoading(false);
        }
      });

    return () => {
      abortController.abort();
    };
  }, [page, limit]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (isLoading && page === 1) return <div>Loading...</div>;
  if (error) return <div>Error loading products: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Products - Without TanStack</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col justify-between rounded-lg border p-4 shadow-lg"
          >
            <img
              src={product.image}
              alt={product.title}
              className="mb-4 h-40 object-cover"
            />
            <h2 className="mb-2 text-lg font-semibold">{product.title}</h2>
            <p className="mb-4 text-sm text-gray-700">{product.description}</p>
            <p className="mb-4 text-lg font-bold">${product.price}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button
          onClick={loadMore}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default ProductsPage;
