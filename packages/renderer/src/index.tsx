import './shim'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app'

const root = document.getElementById('root')

if (!root) throw new Error('Not found root')

ReactDOM.createRoot(root).render(<App />)
