import './App.css';
import ironhackLogo from './images/ironhack-logo-xs.png';
import menuImg from './images/menu-top-xs.png';
import ItemCard from './components/ItemCard';

const Navbar = () => {
  return (
    <nav>
      <img className="nav-img" src={ironhackLogo} alt="Ironhack Logo" />
      <img className="nav-img" src={menuImg} alt="Menu Icon" />
    </nav>
  );
};

function App() {
  return (
    <div className="App">
      <section id="top">
        <Navbar />

        <div className="landing">
          <h1>
            Say hello to <br />
            ReactJS
          </h1>

          <div className="p-container">
            <p>You will learn how to use</p>
            <p>the most popular frontend library,</p>
            <p>and become a super Ninja developer.</p>
          </div>
          <a id="awesome-btn" href="/">
            Awesome!
          </a>
        </div>
      </section>
      <section id="bottom">
        <ItemCard />
      </section>
    </div>
  );
}
export default App;
