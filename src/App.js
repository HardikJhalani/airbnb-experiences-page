import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import katie from './images/katie-zaferes.png'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card 
          img = {katie}
          rating = "5.0"
          reviewCount = {6}
          country = "USA"
          title = "Life lessons with Katie Zaferes"
          price = {136}
          status = 'SOLD OUT'
      />
    </div>
  );
}

export default App;
