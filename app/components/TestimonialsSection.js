"use client";
export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <p className="text-lg mb-4">"Tech Solutions transformed our business with their innovative solutions. Highly recommended!"</p>
            <p className="font-semibold">Mr. Yohan Weerasinghe</p>
            <p>CEO, Example Corp</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <p className="text-lg mb-4">"Exceptional service and support. Tech Solutions is a game-changer for our operations."</p>
            <p className="font-semibold">Mr. Yomal Thushara</p>
            <p>CTO, Another Example Ltd.</p>
          </div>
        </div>
      </div>
    </section>
  );
}