import { useState } from 'react';
import PrimaryButton from '../../../components/PrimaryButton';
import { formatCurrency, generateTransactionId } from '../../../utils/helpers';

const Step4Payment = ({ data, updateData, nextStep, prevStep }) => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const paymentMethods = [
    { id: 'upi', name: 'UPI', icon: '📱', desc: 'Pay via UPI (Google Pay, PhonePe, etc.)' },
    { id: 'card', name: 'Credit/Debit Card', icon: '💳', desc: 'Pay using card' },
    { id: 'netbanking', name: 'Net Banking', icon: '🏦', desc: 'Pay via net banking' },
    { id: 'wallet', name: 'Wallet', icon: '💰', desc: 'Pay via wallet' }
  ];

  const handlePayment = async () => {
    if (!selectedMethod) {
      alert('Please select a payment method');
      return;
    }

    setIsProcessing(true);

    // TODO: Replace with actual payment gateway integration
    // For now, simulate payment processing
    setTimeout(() => {
      const transactionId = generateTransactionId();
      updateData({ transactionId });
      setIsProcessing(false);
      nextStep();
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">
        Payment
      </h2>

      {/* Order Summary */}
      <div className="bg-amber-50 rounded-lg p-6 mb-6">
        <h3 className="font-bold text-amber-900 mb-4">Donation Summary</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-700">Donation Head:</span>
            <span className="font-semibold text-amber-900">{data.donationHead?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Donor Name:</span>
            <span className="font-semibold text-amber-900">{data.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Mobile:</span>
            <span className="font-semibold text-amber-900">{data.mobile}</span>
          </div>
          <div className="border-t pt-2 mt-2">
            <div className="flex justify-between">
              <span className="text-lg font-bold text-amber-900">Total Amount:</span>
              <span className="text-2xl font-bold text-amber-700">
                {formatCurrency(data.amount)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Select Payment Method <span className="text-red-500">*</span>
        </label>
        <div className="space-y-3">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                selectedMethod === method.id
                  ? 'border-amber-600 bg-amber-50'
                  : 'border-gray-200 hover:border-amber-300 bg-white'
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{method.icon}</span>
                <div>
                  <div className="font-semibold text-amber-900">{method.name}</div>
                  <div className="text-sm text-gray-600">{method.desc}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Payment Gateway Placeholder */}
      {selectedMethod && (
        <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
          <p className="text-gray-600 mb-2">
            Payment Gateway Integration Placeholder
          </p>
          <p className="text-sm text-gray-500">
            In production, this will redirect to your payment gateway (Razorpay, Stripe, etc.)
          </p>
        </div>
      )}

      <div className="flex gap-4">
        <PrimaryButton
          type="button"
          onClick={prevStep}
          variant="outline"
          className="flex-1"
          disabled={isProcessing}
        >
          Back
        </PrimaryButton>
        <PrimaryButton
          onClick={handlePayment}
          disabled={!selectedMethod || isProcessing}
          className="flex-1"
        >
          {isProcessing ? 'Processing...' : `Pay ${formatCurrency(data.amount)}`}
        </PrimaryButton>
      </div>

      <p className="text-xs text-gray-500 mt-4 text-center">
        Your payment is secure and encrypted. We do not store your card details.
      </p>
    </div>
  );
};

export default Step4Payment;

