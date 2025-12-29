import { Link } from 'react-router-dom';
import PrimaryButton from '../../../components/PrimaryButton';
import { formatCurrency } from '../../../utils/helpers';

const Step5Success = ({ data, resetFlow }) => {
  const handleDownloadReceipt = () => {
    // TODO: Implement receipt download functionality
    // This would typically generate a PDF receipt
    alert('Receipt download functionality will be implemented with backend integration');
  };

  const handleEmailReceipt = () => {
    // TODO: Implement email receipt functionality
    alert(`Receipt will be sent to ${data.email}`);
  };

  const handleWhatsAppReceipt = () => {
    // TODO: Implement WhatsApp receipt functionality
    if (data.whatsapp) {
      alert(`Receipt will be sent to WhatsApp: ${data.whatsapp}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="mb-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-amber-900 mb-2">
          Donation Successful! 🙏
        </h2>
        <p className="text-gray-600">
          Thank you for your generous contribution
        </p>
      </div>

      <div className="bg-amber-50 rounded-lg p-6 mb-6">
        <h3 className="font-bold text-amber-900 mb-4">Donation Details</h3>
        <div className="space-y-2 text-sm text-left">
          <div className="flex justify-between">
            <span className="text-gray-700">Transaction ID:</span>
            <span className="font-semibold text-amber-900 font-mono">
              {data.transactionId}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Donation Head:</span>
            <span className="font-semibold text-amber-900">{data.donationHead?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Amount:</span>
            <span className="font-bold text-amber-700 text-lg">
              {formatCurrency(data.amount)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Date:</span>
            <span className="font-semibold text-amber-900">
              {new Date().toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <PrimaryButton onClick={handleDownloadReceipt} className="w-full">
          📥 Download Receipt
        </PrimaryButton>
        <div className="grid grid-cols-2 gap-3">
          <PrimaryButton
            onClick={handleEmailReceipt}
            variant="secondary"
            className="w-full"
          >
            📧 Email Receipt
          </PrimaryButton>
          {data.whatsapp && (
            <PrimaryButton
              onClick={handleWhatsAppReceipt}
              variant="secondary"
              className="w-full"
            >
              💬 WhatsApp Receipt
            </PrimaryButton>
          )}
        </div>
      </div>

      <div className="flex gap-4">
        <Link to="/" className="flex-1">
          <PrimaryButton variant="outline" className="w-full">
            Back to Home
          </PrimaryButton>
        </Link>
        <PrimaryButton onClick={resetFlow} className="flex-1">
          Make Another Donation
        </PrimaryButton>
      </div>

      <p className="text-sm text-gray-600 mt-6">
        Your donation receipt has been sent to your email and mobile number.
        <br />
        May you be blessed with peace, prosperity, and spiritual growth! 🙏
      </p>
    </div>
  );
};

export default Step5Success;

