import './App.css';
import About from './components/About/About';

import Menu from './components/Menu/Menu';
import ScrollButton from './components/ScrollButton/ScrollButon';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <About></About>
      <ScrollButton></ScrollButton>      

    </div>
  );
}

export default App;
