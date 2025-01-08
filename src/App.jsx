import { DmsSite, adminConfig } from "@availabs/dms"
import Auth from './Auth'

function App() {
  return ( 
      <DmsSite
        dmsConfig = {
          adminConfig({
            app: 'test',
            type: 'ams-dev'
          })
        }
        routes={[
          Auth
        ]} 
      />
  )
}

export default App