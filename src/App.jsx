import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./Welcome";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Navigate to="/FullStack" replace />} />
        
        
        <Route path="/:role" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}