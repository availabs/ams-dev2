import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { authProvider } from "./modules/ams/src" 

const PROJECT_NAME = "hazard_mitigation";
let API_HOST = "https://graph.availabs.org";
let AUTH_HOST = "https://graph.availabs.org";
let CLIENT_HOST = "mitigateny.org";

const AuthEnabledApp = authProvider(App, { AUTH_HOST, PROJECT_NAME, CLIENT_HOST });


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthEnabledApp />
  </StrictMode>,
)
