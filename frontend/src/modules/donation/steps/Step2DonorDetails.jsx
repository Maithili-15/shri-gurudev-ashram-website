import { useState } from 'react';
import FormInput from '../../../components/FormInput';
import PrimaryButton from '../../../components/PrimaryButton';
import { validateEmail, validatePhone } from '../../../utils/helpers';

const Step2DonorDetails = ({ data, updateData, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateData({ [name]: value });
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!data.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!data.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(data.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!data.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (data.whatsapp && !validatePhone(data.whatsapp)) {
      newErrors.whatsapp = 'Please enter a valid 10-digit WhatsApp number';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      nextStep();
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">
        Donor Details
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <FormInput
          label="Full Name"
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
          error={errors.name}
        />

        <FormInput
          label="Email Address"
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          error={errors.email}
        />

        <FormInput
          label="Address"
          name="address"
          value={data.address}
          onChange={handleChange}
          placeholder="Enter your complete address"
          required
          error={errors.address}
        />

        <FormInput
          label="WhatsApp Number (Optional)"
          type="tel"
          name="whatsapp"
          value={data.whatsapp}
          onChange={handleChange}
          placeholder="Enter WhatsApp number for updates"
          error={errors.whatsapp}
        />

        <div className="flex gap-4 pt-4">
          <PrimaryButton
            type="button"
            onClick={prevStep}
            variant="outline"
            className="flex-1"
          >
            Back
          </PrimaryButton>
          <PrimaryButton type="submit" className="flex-1">
            Continue
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default Step2DonorDetails;

