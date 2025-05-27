import { useApp } from "@/components/AppProvider";
import { MetricCard } from "@/components/MetricCard";
import { mockMetricks } from "@/constants";

export default function Overview() {
  const { users, errorMessage } = useApp();

  const composeMetricks = () => {
    const updatedMetricks = [...mockMetricks].map((metric, idx) => {
      if (idx === 0) {
        return { ...metric, value: users.length };
      }
      return metric;
    });

    return updatedMetricks;
  }

  if (errorMessage) {
    return <span className="text-red-500">{errorMessage}</span>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {composeMetricks().map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
}