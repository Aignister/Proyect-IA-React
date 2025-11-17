import Permissions from "./Permissions";
import TimeLimits from "./TimeLimits";

export default function SettingsView() {
  return (
    <div className="grid grid-cols-2 gap-5">
      <Permissions />
      <TimeLimits />
    </div>
  );
}