import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import cardsData from './data'

function App() {
  const card = cardsData.map(item => {
    return (<Card
                 img = {require(`./images/${item.coverImg}`)}
                 rating = {item.stats.rating}
                 reviewCount = {item.stats.reviewCount}
                 country = {item.location}
                 title = {item.title}
                 price = {item.price}
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
