import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Views/Login/Login';
import GoogleCallback from './Views/GoogleCallback/GoogleCallback';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/auth/google/callback" element={<GoogleCallback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
