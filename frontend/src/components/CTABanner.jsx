import { Link } from 'react-router-dom';

const CTABanner = ({ title, description, primaryAction, secondaryAction }) => {
  return (
    <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        {description && (
          <p className="text-xl mb-8 text-amber-100">{description}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryAction && (
            <Link
              to={primaryAction.path}
              className="px-8 py-3 bg-white text-amber-700 rounded-lg text-lg font-semibold hover:bg-amber-50 transition-colors shadow-lg"
            >
              {primaryAction.label}
            </Link>
          )}
          {secondaryAction && (
            <Link
              to={secondaryAction.path}
              className="px-8 py-3 bg-amber-800 text-white rounded-lg text-lg font-semibold hover:bg-amber-900 transition-colors shadow-lg"
            >
              {secondaryAction.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CTABanner;

