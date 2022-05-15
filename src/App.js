import logo from './logo.svg';
import './App.css';

function App() {
  const handleNameChange = () => {
    const names = ["Gary", "Kelli", "Bill", "Sara"]
    const itm = Math.floor(Math.random() * 3)
    return names[itm]
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {handleNameChange()}!
        </p>
      </header>
    </div>
  );
}

export default App;
