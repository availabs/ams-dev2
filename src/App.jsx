import { DmsSite, adminConfig } from "@availabs/dms"

function App() {
  return ( 
      <DmsSite
        dmsConfig = {
          adminConfig({
            app: 'test',
            type: 'ams-dev'
          })
        }   
      />
  )
}

export default App