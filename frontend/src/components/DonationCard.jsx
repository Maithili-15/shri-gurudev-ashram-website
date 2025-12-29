import { Link } from 'react-router-dom';

const DonationCard = ({ donation }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-amber-100">
      <div className="flex items-start space-x-4">
        <div className="text-4xl">{donation.icon}</div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-amber-900 mb-2">{donation.name}</h3>
          <p className="text-gray-600 mb-4">{donation.description}</p>
          <Link
            to="/donate"
            className="inline-block px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors text-sm font-medium"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;

