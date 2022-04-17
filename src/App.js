import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import './index.scss';
import './App.scss'

function App() {
  return (
    <div className="app-container">
      <div className="App">
        <Header/>
        <Body />
      </div>
    </div>
  );
}

export default App;
