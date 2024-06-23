import chickenData from '../chickenTab.json'
import './App.css'
import Header from './components/Header'
import Teachers from './components/Teachers'
import Students from './components/Students'
import Footer from './components/Footer'
import { useState } from 'react'


function App() {

  const chickenTab = chickenData.chickenTab

  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const getFilteredChickens = () => {
    return chickenTab.filter(chicken => 
      chicken.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <>
      <Header />
      <br/>
      <button onClick={handleToggleVisibility}>Cacher/Montrer</button>
      <br></br>
      {isVisible &&
        <>
      <label htmlFor='search-chicken'>Chercher un poulet:</label>
      <input 
      type='search' 
      id='search-chicken' 
      value={searchTerm} 
      onChange={handleSearchChange}/>
      
          <h2>Equipe pédagogique</h2>
          <div className='cards'>
            <Teachers chickenTab={getFilteredChickens()}  />
          </div>
          <h2>Camarades</h2>
          <div className="cards">
            <Students chickenTab={getFilteredChickens()} />
          </div>
          <Footer />
        </>
      }
    </>
  )
}

export default App
