"use client";
export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-semibold mb-4">Consulting</h3>
            <p>Expert advice to help your business succeed.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-semibold mb-4">Software Development</h3>
            <p>Custom software solutions tailored to your needs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-semibold mb-4">Support & Maintenance</h3>
            <p>Reliable support to keep your systems running smoothly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}