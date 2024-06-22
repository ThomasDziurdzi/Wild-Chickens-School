import chickenData from '../chickenTab.json'
import './App.css'
import Header from './components/Header'
import Teachers from './components/Teachers'
import Students from './components/Students'
import Footer from './components/Footer'


function App() {

 const chickenTab = chickenData.chickenTab
  return (
    <>
        <Header />
        <h2>Equipe pédagogique</h2>
        <div className='cards'>
        <Teachers chickenTab={chickenTab}/>
        </div>
        <h2>Camarades</h2>
        <div className="cards">
        <Students chickenTab={chickenTab}/>
        </div>
        <Footer />
    </>
  )
}

export default App
