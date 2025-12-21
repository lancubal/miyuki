import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Lesson from "./Lesson"
import Exercise from "./Exercise"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/index.html" element={<Lesson />} />
        <Route path="/" element={<Lesson />} />
        {/* <Route path="/chapter/:chapterId" element={<Chapter />} /> */}
        <Route path="/lesson/:lessonId" element={<Lesson />} />
        <Route path="/exercise/:exerciseId" element={<Exercise />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
