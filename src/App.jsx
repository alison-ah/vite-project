import { useState } from 'react'
import Header from './components/Header'
import Quote from './components/Quote'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Quote/>
      <Footer/>
    </div>
  );
}

export default App
