import './App.css';
import About from './components/About/About';

import Menu from './components/Menu/Menu';
import MouseScroll from './components/MouseScrollAnimation/MouseScrollAnimation';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <About></About>
      <MouseScroll></MouseScroll>
    </div>
  );
}

export default App;
