import React, { useCallback, useState } from 'react'
import Editor from './Editor'
import './app.css'

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>('# hello world')

  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc)
  }, [])

  return (
    <div className="app">
      <h1>Hello World</h1>
      <Editor onChange={handleDocChange} initialDoc={doc} />
    </div>
  )
}

export default App
