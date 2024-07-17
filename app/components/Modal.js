"use client";
import { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative z-10">
        <h2 className="text-2xl font-bold mb-4">About Tech Solutions</h2>
        <p className="text-lg mb-4">
          Tech Solutions is dedicated to providing cutting-edge technology solutions to businesses of all sizes. Our team of experts specializes in developing customized solutions that drive efficiency, innovation, and growth. We pride ourselves on our commitment to excellence and customer satisfaction.
        </p>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Modal;