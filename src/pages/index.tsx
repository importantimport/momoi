// import viteLogo from '/vite.svg'
import { useLocalStorage } from '@mantine/hooks'

// import { useState } from 'react'

// import reactLogo from '~/assets/react.svg'
import { useMatrixClient } from '~/context'
import { Navigate } from '~/router'

import './index.css'

function App() {
  // const [count, setCount] = useState(0)

  const matrixClient = useMatrixClient()
  const [accessToken] = useLocalStorage({ key: 'momoi-access-token' })

  if (matrixClient?.isLoggedIn) {
    // return <Navigate to="/room" />
  }
  else if (accessToken) {
    matrixClient?.loginWithToken(accessToken)
    // return <Navigate to="/room" />
  }
  else {
    return <Navigate to="/login" />
  }

  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
  //         <img alt="Vite logo" className="logo" src={viteLogo} />
  //       </a>
  //       <a href="https://react.dev" rel="noreferrer" target="_blank">
  //         <img alt="React logo" className="logo react" src={reactLogo} />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount(count => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
