import { DmsSite, adminConfig } from "@availabs/dms"
import Auth from './Auth'

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
        routes={[...Auth]} 
      />
  )
}

export default App