import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SwipePage from "./pages/SwipePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/swipe" element={<SwipePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;