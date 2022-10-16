import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='header-info'>
        <h1>Happy Shopping With Us</h1>
        <h4>Our First Priority is Quality</h4>
      </div>
      <Shop></Shop>
    </div>
  );
}

export default App;
