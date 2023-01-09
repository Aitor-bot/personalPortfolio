import './App.css';
import About from './components/About/About';

import Menu from './components/Menu/Menu';
import ScrollButton from './components/ScrollButton/ScrollButon';
import Skills from './components/Skills/Skills'

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <About></About>
      <ScrollButton></ScrollButton>
      <Skills></Skills>     

    </div>
  );
}

export default App;
