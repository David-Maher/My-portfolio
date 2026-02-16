import './App.css'
import Footer from './Components/Footer.jsx'
import Header from './Components/Header.jsx'
import AboutMe from './Pages/AboutMe.jsx'
import HomePage from './Pages/HomePage.jsx'
function App() {
  return (
    <div className="App">
        <Header />
        <HomePage/>
        <AboutMe/>
        <Footer/>
    </div>
  )
}
export default App
