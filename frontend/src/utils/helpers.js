// Utility helper functions

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const formatDateTime = (dateString, timeString) => {
  return `${formatDate(dateString)} at ${timeString}`;
};

export const generateOrderId = () => {
  return `ORD${Date.now()}${Math.floor(Math.random() * 1000)}`;
};

export const generateTransactionId = () => {
  return `TXN${Date.now()}${Math.floor(Math.random() * 10000)}`;
};

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone) => {
  const re = /^[6-9]\d{9}$/;
  return re.test(phone);
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

