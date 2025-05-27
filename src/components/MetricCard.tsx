export const MetricCard = ({ label, value }: Metric) => {
  return (
    <div className="border rounded-xl p-4 shadow-sm">
      <h3 className="text-gray-500">{label}</h3>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}