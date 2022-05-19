import './App.css';
import ironhackLogo from './images/ironhack-logo-xs.png';
import topLogo from './images/menu-top-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

function App() {
  return (
    <div className="App">
      <header>
        <div className="header-div">
          <nav>
            <img src={ironhackLogo} alt="IH logo" width="50"></img>
            <img src={topLogo} alt="Top Logo" width="50"></img>
          </nav>
          <h1>
            Say hello to <br></br>
            ReactJS
          </h1>
          <p>
            You will learn how to use <br></br>
            the most popular frontend library, <br></br>
            and become a super Ninja developer
          </p>
          <button class="awesome-button">Awesome!</button>
        </div>
      </header>
      <div className="icons-div">
        <div className="first-div">
          <img src={icon1} alt="" width="100"></img>
          <h3>Declarative</h3>
          <p>
            React makes it <br></br>
            painless to create<br></br>
            interactive UIs.
          </p>
        </div>
        <div className="second-div">
          <img src={icon2} alt="" width="100"></img>
          <h3>Components</h3>
          <p>
            Build encapsulated<br></br>
            components that <br></br>
            manage their state.
          </p>
        </div>
        <div className="third-div">
          <img src={icon3} alt="" width="100"></img>
          <h3>Single-way</h3>
          <p>
            A set of immutable<br></br>
            values are passed to <br></br>
            the component's.
          </p>
        </div>
        <div className="fouth-div">
          <img src={icon4} alt="" width="100"></img>
          <h3>JSX</h3>
          <p>
            Statically-typed, <br></br>
            designed to run on<br></br>
            modern browsers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
