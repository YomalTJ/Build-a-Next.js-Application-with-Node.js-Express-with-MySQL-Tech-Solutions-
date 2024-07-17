"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      router.push('/login'); // Redirect to login if not authenticated
    } else {
      setAuthLoading(false); // Continue loading if user is authenticated
    }
  }, [router]);

  useEffect(() => {
    if (!authLoading) {
      const fetchProducts = async () => {
        try {
          const response = await fetch('http://localhost:3001/products-all');
          if (!response.ok) {
            throw new Error('Failed to fetch products');
          }
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchProducts();
    }
  }, [authLoading]);

  if (authLoading) {
    return <p className="text-center mt-10 text-gray-500">Checking authentication...</p>;
  }

  if (loading) {
    return <p className="text-center mt-10 text-gray-500">Loading products...</p>;
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4 mt-16">
        <h1 className="text-3xl font-bold text-center mb-8">Product List</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-1"><strong>Description:</strong> {product.description}</p>
              <p className="text-gray-700 mb-1"><strong>Price:</strong> ${product.price}</p>
              <p className="text-gray-700"><strong>Category:</strong> {product.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}