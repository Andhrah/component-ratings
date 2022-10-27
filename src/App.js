import logo from './logo.svg';
import './App.css';
import Star from './components/Star';
import Rating from './components/Rating';

function App() {
  return (
    <div className="App">
      <h2>A Star component on its own:</h2>
      <Star color="purple" />
      <Star color="pink" isFilled />
      <Star color="magenta" />
      <Star color="indigo" isFilled />
      <h2>Rating Components:</h2>
      {/* <Rating stars={5} />
      <Rating stars={3} /> */}
    </div>
  );
}

export default App;
