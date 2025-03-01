import { StrictMode } from 'react'; // It Highlights the problem in a application
import { createRoot } from 'react-dom/client'; //It renders react applications
import App from './App.tsx';
import './index.css'; //Global Css

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
