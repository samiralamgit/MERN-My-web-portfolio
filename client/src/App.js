import './App.css';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Project from './pages/Project';
import Skills from './pages/Skills';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <AboutPage />
      <Skills />
      <Experience />
      <Project />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
