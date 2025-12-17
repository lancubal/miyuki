import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Lesson from "./Lesson"
import Exercise from "./Exercise"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lesson />} />
        <Route path="/lesson/:lessonId" element={<Lesson />} />
        <Route path="/exercise/:exerciseId" element={<Exercise />} />
      </Routes>
    </BrowserRouter>
  );
}


// ---------- Router Setup (example) ----------
// In your App.tsx or router file:
//

//



export default App;
