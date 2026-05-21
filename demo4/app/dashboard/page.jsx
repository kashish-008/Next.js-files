"use client";
import ProtectedRoute from "../components/ProtectedRoute";
import { useAuth } from "../context/AuthContext";

function DashboardContent() {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Welcome, {user?.name}!</h2>
        <p className="text-gray-600 mb-4">
          This is a protected page. You can only see this if yo have logged in.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded p-4">
          <h3 className="font-semibold text-blue-800 mb-2">
            What you have learned:
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Authentication with Context API</li>
            <li>Protected Routes (can not access without login)</li>
            <li>Client-side state management</li>
            <li>Using localStorage for persistence</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}