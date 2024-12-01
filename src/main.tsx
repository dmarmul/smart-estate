import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/buy" element={<HomePage />} />
          <Route path="/rent" element={<HomePage />} />
          <Route path="/sign-up" element={<HomePage />} />
          <Route path="/log-in" element={<HomePage />} />
        </Route>
        <Route
          path="*"
          element={<h1 style={{ color: 'red' }}>Page Not Found</h1>}
        />
      </Routes>
    </Router>
  </StrictMode>,
);
