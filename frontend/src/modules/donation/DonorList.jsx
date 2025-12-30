import { useState, useEffect } from 'react';
import { formatCurrency } from '../../utils/helpers';

const DonorList = ({ donors }) => {
  const [displayDonors, setDisplayDonors] = useState(donors.slice(0, 5));

  useEffect(() => {
    // Simulate live scrolling effect
    const interval = setInterval(() => {
      setDisplayDonors(prev => {
        const randomIndex = Math.floor(Math.random() * donors.length);
        const newDonor = donors[randomIndex];
        // Add new donor and remove oldest
        return [newDonor, ...prev.slice(0, 4)];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [donors]);

  return (
    <div className="bg-amber-50 rounded-lg p-6 mb-12">
      <h3 className="text-2xl font-bold text-amber-900 mb-4">Recent Donations</h3>
      <div className="space-y-2 max-h-64 overflow-y-auto">
        {displayDonors.map((donor, index) => (
          <div
            key={`${donor.id}-${index}`}
            className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm animate-fade-in"
          >
            <div>
              <span className="font-semibold text-amber-900">{donor.name}</span>
              <span className="text-gray-600 ml-2">from {donor.city}</span>
            </div>
            <div className="font-bold text-amber-700">{formatCurrency(donor.amount)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonorList;

