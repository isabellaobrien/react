import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps greeting="Nice to meet you!" age="32" name="Mike" />
    </div>
  );
}

export default App;
