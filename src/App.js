import Nav from './components/Nav';
import HomeScreen from './screen/HomeScreen';
import './styles.css';
import Cart from './components/Cart';

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Cart />
      <br />
      <HomeScreen />
    </div>
  );
}
