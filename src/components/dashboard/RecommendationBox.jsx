import { AlertCircle } from "lucide-react";

export default function RecommendationBox() {
  return (
    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3">
      <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
      <div>
        <p className="text-sm font-semibold text-blue-900">Recomendación</p>
        <p className="text-sm text-blue-700 mt-1">
          Se recomienda practicar más las figuras para mejorar el progreso general.
        </p>
      </div>
    </div>
  );
}