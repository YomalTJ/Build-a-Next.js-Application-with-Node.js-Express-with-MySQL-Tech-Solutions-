"use client";
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="mb-4">© {new Date().getFullYear()} Tech Solutions. All rights reserved.</p>
        <p>123 Tech Street, Innovation City, LK 12345</p>
        <p>info@techsolutions.com | (078) 436-7735</p>
      </div>
    </footer>
  );
}