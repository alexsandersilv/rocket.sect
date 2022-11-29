import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/Home";
import ServicesPage from "./routes/Services";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
    </Routes>
  )
}