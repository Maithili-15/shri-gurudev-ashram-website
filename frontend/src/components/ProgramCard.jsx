const ProgramCard = ({ program }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-amber-100">
      <div className="text-4xl mb-4">{program.icon}</div>
      <h3 className="text-xl font-bold text-amber-900 mb-2">{program.title}</h3>
      <p className="text-gray-600">{program.description}</p>
    </div>
  );
};

export default ProgramCard;

