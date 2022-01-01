import { useState } from 'react'
import './App.css'
import FlavorForm from './components/selectForm'
import FilterableProductTable from './components/ShoppingList/FilterableProductTable'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FlavorForm />
        <FilterableProductTable />
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
