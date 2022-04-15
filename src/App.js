import './App.css';
import Slider from "./components/slider/Slider"

function App() {
  return (
    <Slider
      min={0}
      max={99}
      onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
    />
  );
}

export default App;
