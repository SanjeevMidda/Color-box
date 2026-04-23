import "./index.css";
import Block from "./components/Block";
import BlockContainer from "./components/BlockContainer";

function App() {
  return (
    <div className="App">
      <h3>square.</h3>
      <BlockContainer>
        {Array.from({ length: 4000 }).map((_, i) => (
          <Block key={i} />
        ))}
      </BlockContainer>
    </div>
  );
}

export default App;
