export default function TimeLimits() {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Límites de uso</h3>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Tiempo máximo diario
          </label>

          <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent font-medium text-gray-900">
            <option>Sin límite</option>
            <option>30 minutos</option>
            <option>1 hora</option>
            <option selected>2 horas</option>
            <option>3 horas</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Horario permitido
          </label>

          <div className="grid grid-cols-2 gap-3">
            <input
              type="time"
              defaultValue="09:00"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="time"
              defaultValue="20:00"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}