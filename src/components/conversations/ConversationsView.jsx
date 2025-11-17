import { MessageSquare, ChevronRight } from "lucide-react";

export default function ConversationsView({ conversationHistory, selectedChild }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Historial de conversaciones</h3>
        <p className="text-sm text-gray-600 mt-1">
          Últimas interacciones de {selectedChild}
        </p>
      </div>

      <div className="divide-y divide-gray-200">
        {conversationHistory.map((conv, idx) => (
          <div
            key={idx}
            className="p-6 hover:bg-gray-50 transition-colors cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-gray-900 p-3 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{conv.topic}</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    {conv.date} • {conv.duration}
                  </p>
                </div>
              </div>

              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}