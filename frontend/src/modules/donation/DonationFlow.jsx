import { useState } from 'react';
import Step1MobileOTP from './steps/Step1MobileOTP';
import Step2DonorDetails from './steps/Step2DonorDetails';
import Step3DonationDetails from './steps/Step3DonationDetails';
import Step4Payment from './steps/Step4Payment';
import Step5Success from './steps/Step5Success';

const DonationFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [donationData, setDonationData] = useState({
    mobile: '',
    otp: '',
    name: '',
    email: '',
    address: '',
    whatsapp: '',
    donationHead: null,
    amount: 0,
    customAmount: '',
    transactionId: null
  });

  const updateData = (data) => {
    setDonationData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const resetFlow = () => {
    setCurrentStep(1);
    setDonationData({
      mobile: '',
      otp: '',
      name: '',
      email: '',
      address: '',
      whatsapp: '',
      donationHead: null,
      amount: 0,
      customAmount: '',
      transactionId: null
    });
  };

  const steps = [
    { number: 1, title: 'Mobile & OTP' },
    { number: 2, title: 'Donor Details' },
    { number: 3, title: 'Donation Details' },
    { number: 4, title: 'Payment' },
    { number: 5, title: 'Success' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      {/* Progress Steps */}
      {currentStep < 5 && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {steps.slice(0, 4).map((step) => (
              <div key={step.number} className="flex-1 flex items-center">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      currentStep >= step.number
                        ? 'bg-amber-600 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {currentStep > step.number ? '✓' : step.number}
                  </div>
                  <p className="text-xs mt-2 text-center text-gray-600 hidden sm:block">
                    {step.title}
                  </p>
                </div>
                {step.number < 4 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      currentStep > step.number ? 'bg-amber-600' : 'bg-gray-200'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step Content */}
      <div>
        {currentStep === 1 && (
          <Step1MobileOTP
            data={donationData}
            updateData={updateData}
            nextStep={nextStep}
          />
        )}
        {currentStep === 2 && (
          <Step2DonorDetails
            data={donationData}
            updateData={updateData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {currentStep === 3 && (
          <Step3DonationDetails
            data={donationData}
            updateData={updateData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {currentStep === 4 && (
          <Step4Payment
            data={donationData}
            updateData={updateData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {currentStep === 5 && (
          <Step5Success
            data={donationData}
            resetFlow={resetFlow}
          />
        )}
      </div>
    </div>
  );
};

export default DonationFlow;

