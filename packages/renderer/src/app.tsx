import React, { useState } from 'react'
import './app.css'

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="app">
      <header className="app-header">
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount(n => n + 1)}>
            count is : {count}
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
