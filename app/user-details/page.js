"use client";

import { useEffect, useState } from 'react';
import { auth, firestore } from '../../firebase';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';

export default function UserDetails() {
  const [userData, setUserData] = useState(null);
  const [userAddress, setUserAddress] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Check user authentication status from localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      router.push('/login'); // Redirect to login if not authenticated
      return;
    } else {
      setLoading(false); // Continue loading if user is authenticated
    }

    const fetchData = async () => {
      setLoading(true);

      try {
        // Fetch user data from Firebase
        const userDoc = await firestore.collection('users').doc(user.uid).get();
        if (userDoc.exists) {
          setUserData(userDoc.data());
        } else {
          setError('User data not found.');
        }

        // Fetch user address data from Firebase
        const addressSnapshot = await firestore.collection('users').doc(user.uid).collection('address').get();
        const addressData = addressSnapshot.docs.map(doc => doc.data());
        setUserAddress(addressData);

      } catch (err) {
        setError('Error fetching user details: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router]);

  if (loading) {
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  return (
    <div>
      <Header />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6 mt-8">
        <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 p-4 text-white text-center">
            <h1 className="text-4xl font-bold">User Details</h1>
          </div>
          <div className="p-6">
            {userData && (
              <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
                    <FontAwesomeIcon icon={faUser} className="text-4xl" />
                  </div>
                  <div className="ml-6">
                    <h2 className="text-3xl font-semibold text-gray-800">User Information</h2>
                    <p className="text-gray-600 mt-2"><strong>Email:</strong> {userData.email}</p>
                  </div>
                </div>
              </div>
            )}
            {userAddress.length > 0 && (
              <div className="bg-white shadow-sm rounded-lg p-6">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Address Information</h2>
                <div className="space-y-4">
                  {userAddress.map((address, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <p className="text-gray-600"><strong>Address:</strong> {address.address}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}