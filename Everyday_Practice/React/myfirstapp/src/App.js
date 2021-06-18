import First from "./components/first";
import Second from "./components/second";
function App() {
  return (
    <div className="App">
      <header className="App-header">Learn React</header>
      <First game="Real Madrid" desc="Football Team" />
      <Second desc="Data coming from Parent component"/>
    </div>
  );
}

export default App;
