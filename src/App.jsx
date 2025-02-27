import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import Goals from './components/Goals';
import ITExperience from './components/ITExperience';
import PhotoGallery from './components/PhotoGallery';
import Guestbook from './components/Guestbook';
import bgVideo from './assets/videos/bgConcepcion.mp4';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="video-background">
          <video autoPlay muted loop playsInline>
            <source src={bgVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/education" element={<Education />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/experience" element={<ITExperience />} />
            <Route path="/gallery" element={<PhotoGallery />} />
            <Route path="/guestbook" element={<Guestbook />} />
          </Routes>
        </main>
        <footer className="footer">
          © 2025 Joshua Concepcion. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App; 