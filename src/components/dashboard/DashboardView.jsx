import StatsCards from "./StatsCards";
import ProgressByTopic from "./ProgressByTopic";
import WeeklyActivity from "./WeeklyActivity";

export default function DashboardView({ progressData, weeklyStats }) {
  return (
    <div className="space-y-6">
      <StatsCards />

      <div className="grid grid-cols-3 gap-5">
        <ProgressByTopic progressData={progressData} />
        <WeeklyActivity weeklyStats={weeklyStats} />
      </div>
    </div>
  );
}