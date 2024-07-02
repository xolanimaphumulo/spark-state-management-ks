"use client";

import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

// Define the Product interface
interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

// Fetch products from the API
const fetchProducts = async () => {
  const response = await fetch(`https://fakestoreapi.com/products?limit=30`);
  return (await response.json()) as Product[];
};

const ProductsPage = () => {
  const {
    data = [],
    isLoading,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isFetching && !data) return <div>Loading...</div>;
  if (error) return <div>Error loading products: {error.message}</div>;
  console.log("data", data);
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Products</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((product) => (
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
    </div>
  );
};

export default ProductsPage;
