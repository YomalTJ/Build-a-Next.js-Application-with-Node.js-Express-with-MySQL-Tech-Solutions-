"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear the stored user session
    router.push('/login');
  };

  return (
    <header className="bg-gray-800 text-white py-4 fixed w-full top-0 left-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tech Solutions</h1>
        <nav className="space-x-4 flex items-center">
          <Link href="/home" className="hover:underline">Home</Link>
          <Link href="/add-product" className="hover:underline">Add Product</Link>
          <Link href="/products" className="hover:underline">Products</Link>
          <Link href="/user-details" className="hover:underline">User Details</Link>
          <button
            onClick={handleLogout}
            className="ml-4 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
}