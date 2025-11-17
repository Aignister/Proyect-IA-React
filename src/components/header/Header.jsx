import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

export default function Header({ selectedChild, setSelectedChild, children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gray-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">IA</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">IA Kids - Supervisión</h1>
              <p className="text-xs text-gray-500 font-medium">Panel de control parental</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <select
              value={selectedChild}
              onChange={(e) => setSelectedChild(e.target.value)}
              className="px-5 py-2.5 border border-gray-300 rounded-lg font-semibold text-gray-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white"
            >
              {children.map((child) => (
                <option key={child.name} value={child.name}>
                  {child.name} ({child.age} años)
                </option>
              ))}
            </select>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2.5 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors font-medium"
              title="Cerrar sesión"
            >
              <LogOut className="w-5 h-5" />
              <span>Salir</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}