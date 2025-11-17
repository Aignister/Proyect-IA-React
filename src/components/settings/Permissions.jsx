import { Camera, Mic, Video } from "lucide-react";

export default function Permissions() {
  const items = [
    { icon: Camera, label: "Cámara", enabled: false },
    { icon: Mic, label: "Micrófono", enabled: false },
    { icon: Video, label: "Voz", enabled: false },
  ];

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Permisos de la aplicación</h3>

      <div className="space-y-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <item.icon className="w-5 h-5 text-gray-700" />
              <span className="font-semibold text-gray-900">{item.label}</span>
            </div>

            <button
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                item.enabled ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  item.enabled ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}