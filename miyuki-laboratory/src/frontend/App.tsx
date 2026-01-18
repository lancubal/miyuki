import './App.css';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom"
import Lesson from "./Lesson"
import Exercise from "./Exercise"
import Book from './Book';
import Chapter from './Chapter';


export default App
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/chapters/:chapterId" element={<Chapter />} />
        {/* <Route path="/chapters/:chapterId/appendix" element={<Appendix />} /> */}
        <Route path="/lessons/:lessonId" element={<Lesson />} />
        <Route path="/exercises/:exerciseId" element={<Exercise />} />
        {/* <Route path="/faqs" element={<Faqs />} /> */}
      </Routes>
    </HashRouter>
  );
}
