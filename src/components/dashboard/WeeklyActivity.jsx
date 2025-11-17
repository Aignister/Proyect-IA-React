export default function WeeklyActivity({ weeklyStats }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Actividad semanal</h3>

      <div className="space-y-4">
        {weeklyStats.map((stat, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 w-12">{stat.day}</span>

            <div className="flex-1 mx-4 bg-gray-100 rounded-full h-2.5 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-gray-900 to-gray-700 rounded-full"
                style={{ width: `${(stat.minutes / 90) * 100}%` }}
              />
            </div>

            <span className="text-sm font-bold text-gray-900 w-12 text-right">
              {stat.minutes}m
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">Promedio diario</span>
          <span className="text-xl font-bold text-gray-900">57m</span>
        </div>
      </div>
    </div>
  );
}