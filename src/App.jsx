import { DmsSite, adminConfig } from "@availabs/dms"
import Auth from './Auth'
import { withAuth, useAuth } from "./modules/ams/src"
function App() {
  //console.log('auth', Auth)
  Auth.forEach(d => d.Component = d.element)
  return ( 
      <DmsSite
        dmsConfig = {
          adminConfig({
            app: 'test',
            type: 'ams-dev'
          })
        }
        authWrapper={withAuth}
        routes={[...Auth]} 
      />
  )
}

export default App