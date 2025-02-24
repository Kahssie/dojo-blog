import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = "Kokaina"
  const likes = 50;
  const link = "http://www.google.com"

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{ title }</h1>
        <Home />
      </div>
    </div>
  );
}

export default App;
