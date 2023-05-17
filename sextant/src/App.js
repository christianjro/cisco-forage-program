import './App.css';
import Banner from './Banner.jsx';
import Exhibit from './Exhibit.jsx';
import Address from './Address.jsx';
import PylonConnection from './PylonConnection';

function App() {
  return (
    <div className="App">
      <Banner bannerText={"Sextant"} />
      <Exhibit name={"IPv4 Address"}>
          <Address addressType="IPv4" />
      </Exhibit>

      <Exhibit name={"IPv6 Address"}>
          <Address addressType="IPv6" />
      </Exhibit>

      <Exhibit name={"Pylon Packet Latency"}>
          <PylonConnection />
      </Exhibit>
    </div>
  );
}

export default App;
