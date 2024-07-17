"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Modal from '../components/Modal';
import heroImg from './medium-shot-man-wearing-vr-glasses.jpg'

export default function HeroSection() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroImg}
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 md:px-12">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
          Transforming Your <span className="text-blue-400">Business</span> with <span className="text-blue-400">Tech Solutions</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Discover innovative solutions tailored to your business needs. Empowering you with cutting-edge technology and expert support.
        </p>
        <div className="flex justify-center">
          <button
            onClick={openModal}
            className="ml-4 bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}