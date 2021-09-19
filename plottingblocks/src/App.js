import './App.css';
import Advertisement from './components/Advertisement';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Subcontent from './components/Subcontent';

function App() {
  return (
    <div className="App">
      <Header />
      <div className = "container">
        <Navigation />
        <Main>
          <Subcontent />
          <Subcontent />
          <Subcontent />
          {/* <Advertisement /> */}
        </Main> 
      </div>
    </div>
  );
}

export default App;
