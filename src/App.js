import "./App.css";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <MyHeader />
      <header className="App-header">
        <h2>Hello React!</h2>
        <Counter />
      </header>
      <MyFooter />
    </div>
  );
}

export default App;
