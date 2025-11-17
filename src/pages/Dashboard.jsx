import React, { useState } from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import DashboardView from "../components/dashboard/DashboardView";
import ConversationsView from "../components/conversations/ConversationsView";
import SettingsView from "../components/settings/SettingsView";

export default function Dashboard() {
  const [activeView, setActiveView] = useState("dashboard");
  const [selectedChild, setSelectedChild] = useState("Sofia");

  const children = [
    { name: "Sofia", age: 7, avatar: "S" },
    { name: "Lucas", age: 5, avatar: "L" },
  ];

  const progressData = {
    Vocales: { progress: 80, trend: "up", lastActivity: "2 horas" },
    Colores: { progress: 70, trend: "up", lastActivity: "1 día" },
    Figuras: { progress: 60, trend: "down", lastActivity: "2 días" },
    Números: { progress: 75, trend: "up", lastActivity: "5 horas" },
  };

  const conversationHistory = [
    { topic: "Vocales y Sonidos", date: "25/08/2025", duration: "15 min" },
    { topic: "Identificación de Colores", date: "24/08/2025", duration: "12 min" },
    { topic: "Nombres de Figuras", date: "23/08/2025", duration: "18 min" },
    { topic: "Aprendiendo Números", date: "22/08/2025", duration: "20 min" },
    { topic: "Animales", date: "21/08/2025", duration: "10 min" },
  ];

  const weeklyStats = [
    { day: "Lun", minutes: 45 },
    { day: "Mar", minutes: 62 },
    { day: "Mié", minutes: 38 },
    { day: "Jue", minutes: 71 },
    { day: "Vie", minutes: 55 },
    { day: "Sáb", minutes: 82 },
    { day: "Dom", minutes: 48 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        selectedChild={selectedChild}
        setSelectedChild={setSelectedChild}
        children={children}
      />

      <div className="flex">
        <Sidebar activeView={activeView} setActiveView={setActiveView} />

        <main className="flex-1 p-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            {activeView === "dashboard" && (
              <DashboardView
                progressData={progressData}
                weeklyStats={weeklyStats}
              />
            )}
            {activeView === "conversations" && (
              <ConversationsView
                conversationHistory={conversationHistory}
                selectedChild={selectedChild}
              />
            )}
            {activeView === "settings" && <SettingsView />}
          </div>
        </main>
      </div>
    </div>
  );
}