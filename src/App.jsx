import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SwipePage from "./pages/SwipePage";

// Auth Check
function ProtectedRoute({ children }) {

  const isLogin = localStorage.getItem("isLogin");

  return isLogin
    ? children
    : <Navigate to="/" />;
}

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Login */}
        <Route
          path="/"
          element={<LoginPage />}
        />

        {/* Protected */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/swipe"
          element={
            <ProtectedRoute>
              <SwipePage />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;