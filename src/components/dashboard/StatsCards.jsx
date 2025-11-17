import { Clock, TrendingUp, Award, BarChart3 } from "lucide-react";

export default function StatsCards() {
  const cards = [
    { label: "Días de uso", value: "7", icon: Clock, color: "bg-gray-900" },
    { label: "Tiempo hoy", value: "2h 15m", icon: TrendingUp, color: "bg-blue-600" },
    { label: "Progreso global", value: "71%", icon: Award, color: "bg-blue-500" },
    { label: "Sesiones", value: "24", icon: BarChart3, color: "bg-gray-700" },
  ];

  return (
    <div className="grid grid-cols-4 gap-5">
      {cards.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                {item.label}
              </p>
              <p className="text-3xl font-bold text-gray-900">{item.value}</p>
            </div>
            <div className={`${item.color} p-3 rounded-lg`}>
              <item.icon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}