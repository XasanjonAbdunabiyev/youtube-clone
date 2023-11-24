import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { VidoeDetails } from "./pages/Videos/VidoeDetails";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/watch/:id" element={<VidoeDetails />} />
    </Routes>
  )
}