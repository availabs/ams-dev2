import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { authProvider } from "./modules/ams/src" 

const PROJECT_NAME = "ams-dev2";
let API_HOST = "https://graph.availabs.org";
let AUTH_HOST = "https://graph.availabs.org";
let CLIENT_HOST = "mitigateny.org";

if (process.env.NODE_ENV === "development") {
  CLIENT_HOST = "localhost:5173";
}

const AuthEnabledApp = authProvider(App, { AUTH_HOST, PROJECT_NAME, CLIENT_HOST });


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthEnabledApp />
  </StrictMode>,
)
