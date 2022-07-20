import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import cardsData from './data'

function App() {
  const card = cardsData.map(item => {
    return (<Card
                 key = {item.id}
                 {...item}
           />)
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className='cards-list'>
        {card}
      </div>
    </div>
  );
}

export default App;
