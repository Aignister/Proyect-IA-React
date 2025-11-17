import RecommendationBox from "./RecommendationBox";

export default function ProgressByTopic({ progressData }) {
  return (
    <div className="col-span-2 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Progreso por tema</h3>

      <div className="space-y-6">
        {Object.entries(progressData).map(([topic, data]) => (
          <div key={topic}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-gray-900">{topic}</span>
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-500">
                  Última actividad: {data.lastActivity}
                </span>
                <span className="text-sm font-bold text-gray-900">{data.progress}%</span>
              </div>
            </div>

            <div className="relative h-2.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="absolute h-full bg-gradient-to-r from-blue-600 to-blue-500 rounded-full"
                style={{ width: `${data.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <RecommendationBox />
    </div>
  );
}