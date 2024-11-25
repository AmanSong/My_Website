import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Main from './components/Main';
import Education from './components/Pages/Education';
import CV from './components/Pages/CV';
import Projects from './components/Pages/Projects';

function App() {
  return (
    <div className="Main-App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='/education' element={<Education />} />
            <Route path='/cv' element={<CV></CV>} />
            <Route path='/projects' element={<Projects></Projects>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
