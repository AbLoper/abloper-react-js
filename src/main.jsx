import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.css';
import './index.css';
import './mediaQuery.css'
import App from './App.jsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { IconContext } from "react-icons";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <IconContext.Provider value={{ size: "16px" }}> */}
    <App />
    {/* </IconContext.Provider> */}
  </StrictMode>
);

