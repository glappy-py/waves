import "./App.css";
import Waves from "./components/Waves";
const App = () => {
  return (
    <div className="app">
      <Waves
        depth="10vh"
        height="50vh"
        bars={60}
        waveLength={20}
        waveVelocity={0.3}
        startColor="rgb(45, 127, 204)"
        endColor="rgb(204, 154, 45)"
      />
    </div>
  );
};

export default App;
