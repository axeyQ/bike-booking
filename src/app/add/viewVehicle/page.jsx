'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

export default function ViewVehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  // Fetch vehicles on load
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const res = await fetch('/api/vehicles');
        if (!res.ok) {
          throw new Error('Failed to fetch vehicles');
        }
        const data = await res.json();
        setVehicles(data);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
        setMessage('Failed to load vehicles. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();

        // Set up polling (every 5 seconds)
        const intervalId = setInterval(fetchVehicles, 5000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
  }, []);

  // Toggle availability
  const toggleAvailability = async (vehicleId) => {
    try {
      const res = await fetch(`/api/vehicles/${vehicleId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error('Failed to toggle availability');
      }

      const updatedVehicle = await res.json();

      // Update state with the new vehicle data
      setVehicles((prev) =>
        prev.map((v) =>
          v._id === updatedVehicle._id ? updatedVehicle : v
        )
      );
    } catch (error) {
      console.error('Error toggling availability:', error);
      setMessage('Failed to update vehicle status. Please try again.');
    }
  };

  if (loading) {
    return <p>Loading vehicles...</p>;
  }

  if (message) {
    return <p className="text-red-500">{message}</p>;
  }

  if (vehicles.length === 0) {
    return <p>No vehicles available.</p>;
  }

  return (
    <main className="p-4 overflow">
          <div className=" flex items-center justify-start gap-4 mb-4">
      <Link href="/">
      <FaArrowLeft/>
      </Link>
      <h1 className="text-xl font-bold ">All Vehicles</h1>
      </div>
      <table className="w-full border-collapse border border-gray-300 min-w-fit overflow-x-auto">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Registration Number</th>
            <th className="border border-gray-300 px-4 py-2">Last Booked At</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle._id}>
            <td className="border border-gray-300 px-4 py-2">
                <button
                  className={`px-4 text-sm py-2 rounded-md ${
                    vehicle.available
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-red-500 text-white hover:bg-red-600'
                  }`}
                  onClick={() => toggleAvailability(vehicle._id)}
                >
                  {vehicle.available ? 'Book Now' : 'Mark Available'}
                </button>
              </td>
              <td className="border border-gray-300 px-4 py-2">{vehicle.name}</td>
              <td className="border border-gray-300 px-4 py-2">{vehicle.registrationNumber}</td>
            
              <td className="border border-gray-300 px-4 py-2">
                {vehicle.lastToggled
                  ? new Date(vehicle.lastToggled).toLocaleString()
                  : 'Never'}
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
