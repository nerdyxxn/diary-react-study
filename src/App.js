import "./App.css";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import Counter from "./Counter";
import Container from "./Container";

function App() {
  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    initialValue: 5,
  };

  return (
    <div className="App">
      <MyHeader />
      <header className="App-header">
        <h2>Hello React!</h2>
        <Counter {...counterProps} />
      </header>
      <MyFooter />
    </div>
  );
}

export default App;
