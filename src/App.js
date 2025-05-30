import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Main from './components/Main';
import Education from './components/Pages/Education';
import CV from './components/Pages/CV';
import Projects from './components/Pages/Projects';
import Transcript from './components/Pages/Transcript';

function App() {
  return (
    <div className="Main-App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='/education' element={<Education />} />
            <Route path='/cv' element={<CV></CV>} />
            <Route path='/transcript' element={<Transcript></Transcript>} />
            <Route path='/projects' element={<Projects></Projects>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
