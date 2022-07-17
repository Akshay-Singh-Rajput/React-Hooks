import './App.css';
import { UseContext } from './Basic Hooks/UseContext';
import { UseEffect } from './Basic Hooks/UseEffect';
import { UseStateCount } from './Basic Hooks/UseState';

function App() {
  return (
    <div className="App">
      <UseStateCount initialCount = {0} />
      <UseEffect  />
      <UseContext  />
    
    </div>
  );
}

export default App;
