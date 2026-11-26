import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import AptitudeGuruHeader from './aptitude-guru-header/aptitude-guru-header.jsx'
import SymbolOfExcellence from "./symbol-of-excellence/symbol-of-excellence.jsx";
import Image1 from './image-component/img1.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AptitudeGuruHeader />
      <Image1 />
       <SymbolOfExcellence
      title={"A Symbol of Excellence in Placement Training"}
      subtitle={"Aptitude Guru Hem was born from the aspiration to create a learning environment that inspires greatness. Our founder, driven by personal experiences and a desire to make a difference, established the company with a mission to empower students with the right skills and mindset for success."}
      vision={"Our vision is to empower individuals from diverse backgrounds to become accomplished professionals. At Aptitude Guru Hem, we believe that knowledge has the power to transcend boundaries."}
      mission={"Our vision is to empower individuals from diverse backgrounds to become accomplished professionals. At Aptitude Guru Hem, we believe that knowledge has the power to transcend boundaries"}
      />
     
    </div>

    
  )
}

export default App
