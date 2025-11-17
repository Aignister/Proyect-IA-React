import { Home, Settings, History, MessageSquare, BarChart3 } from "lucide-react";

export default function Sidebar({ activeView, setActiveView }) {
  const menu = [
    { id: "dashboard", icon: Home, label: "Panel general" },
    { id: "conversations", icon: MessageSquare, label: "Conversaciones" },
    { id: "analytics", icon: BarChart3, label: "Analíticas" },
    { id: "history", icon: History, label: "Historial completo" },
    { id: "settings", icon: Settings, label: "Configuración" },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-73px)] sticky top-[73px]">
      <nav className="p-4 space-y-1">
        {menu.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium ${
              activeView === item.id
                ? "bg-gray-900 text-white shadow-lg"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}