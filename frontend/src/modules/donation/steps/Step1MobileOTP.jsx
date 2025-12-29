import { useState } from 'react';
import FormInput from '../../../components/FormInput';
import PrimaryButton from '../../../components/PrimaryButton';
import { validatePhone } from '../../../utils/helpers';

const Step1MobileOTP = ({ data, updateData, nextStep }) => {
  const [errors, setErrors] = useState({});
  const [otpSent, setOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleMobileChange = (e) => {
    const mobile = e.target.value.replace(/\D/g, '').slice(0, 10);
    updateData({ mobile });
    if (errors.mobile) {
      setErrors(prev => ({ ...prev, mobile: '' }));
    }
  };

  const handleOtpChange = (e) => {
    const otp = e.target.value.replace(/\D/g, '').slice(0, 6);
    updateData({ otp });
    if (errors.otp) {
      setErrors(prev => ({ ...prev, otp: '' }));
    }
  };

  const sendOTP = async () => {
    if (!data.mobile) {
      setErrors({ mobile: 'Mobile number is required' });
      return;
    }

    if (!validatePhone(data.mobile)) {
      setErrors({ mobile: 'Please enter a valid 10-digit mobile number' });
      return;
    }

    setIsLoading(true);
    // TODO: Replace with actual API call
    setTimeout(() => {
      console.log('OTP sent to:', data.mobile);
      setOtpSent(true);
      setIsLoading(false);
      // In real app, OTP would be sent via SMS
      // For demo, we'll use a dummy OTP: 123456
    }, 1000);
  };

  const verifyOTP = () => {
    if (!data.otp) {
      setErrors({ otp: 'Please enter OTP' });
      return;
    }

    if (data.otp.length !== 6) {
      setErrors({ otp: 'OTP must be 6 digits' });
      return;
    }

    // TODO: Replace with actual OTP verification API call
    // For demo, accept any 6-digit OTP
    if (data.otp.length === 6) {
      nextStep();
    } else {
      setErrors({ otp: 'Invalid OTP. Please try again.' });
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">
        Verify Your Mobile Number
      </h2>

      <div className="space-y-4">
        <FormInput
          label="Mobile Number"
          type="tel"
          name="mobile"
          value={data.mobile}
          onChange={handleMobileChange}
          placeholder="Enter your 10-digit mobile number"
          required
          error={errors.mobile}
          disabled={otpSent}
        />

        {!otpSent ? (
          <PrimaryButton
            onClick={sendOTP}
            disabled={isLoading || !data.mobile}
            className="w-full"
          >
            {isLoading ? 'Sending OTP...' : 'Send OTP'}
          </PrimaryButton>
        ) : (
          <>
            <div className="bg-green-50 border border-green-200 text-green-700 p-3 rounded-lg text-sm mb-4">
              OTP sent to {data.mobile}. Please check your SMS.
            </div>
            <FormInput
              label="Enter OTP"
              type="tel"
              name="otp"
              value={data.otp}
              onChange={handleOtpChange}
              placeholder="Enter 6-digit OTP"
              required
              error={errors.otp}
              maxLength={6}
            />
            <div className="flex gap-4">
              <PrimaryButton
                onClick={verifyOTP}
                disabled={!data.otp || data.otp.length !== 6}
                className="flex-1"
              >
                Verify OTP
              </PrimaryButton>
              <PrimaryButton
                onClick={() => {
                  setOtpSent(false);
                  updateData({ otp: '' });
                }}
                variant="outline"
                className="flex-1"
              >
                Change Number
              </PrimaryButton>
            </div>
          </>
        )}
      </div>

      <p className="text-sm text-gray-600 mt-4 text-center">
        We'll use this number to send you donation receipt and updates
      </p>
    </div>
  );
};

export default Step1MobileOTP;

