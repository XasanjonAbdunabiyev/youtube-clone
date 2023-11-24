import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { VidoeDetails } from "./pages/Videos/VidoeDetails";
import Shorts from "./pages/Shorts"
import Subscriptions from "./pages/Subscriptions";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/watch/:id" element={<VidoeDetails />} />
      <Route path="/shorts" element={<Shorts />} />
      <Route path="/subscriptions" element={<Subscriptions />} />
    </Routes>
  )
}