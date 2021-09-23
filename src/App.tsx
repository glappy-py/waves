import "./App.css";
import Waves from "./components/Waves";
const App = () => {
  return (
    <div className="app">
      <Waves
        depth="2vh"
        height="30vh"
        bars={60}
        startColor="lightblue"
        endColor="wheat"
      />
    </div>
  );
};

export default App;
