import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'


const name = "Bill";

const root = createRoot(document.getElementById('root')!);

root.render(
  <>
    <h1>Hello, {name}</h1>
    <h3>The time is {new Date().toLocaleTimeString()}</h3>
  </>
);

/*
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
  */
