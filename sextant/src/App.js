import './App.css';
import Banner from './Banner.jsx';
import Exhibit from './Exhibit.jsx';

function App() {
  return (
    <div className="App">
      <Banner bannerText={"Sextant"} />
      <Exhibit name={"Exhibit Title"}>
        <p>ABC</p>
        <p>DEF</p>
      </Exhibit>
    </div>
  );
}

export default App;
