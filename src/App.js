import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Main from './components/Main';
import Education from './components/Education';

function App() {
  return (
    <div className="Main-App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='/education' element={<Education />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
