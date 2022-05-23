import ClassCounter from "./classComponents/ClassCounter";
import UseStateBasicCounter from "./functionalComponents/useStateHook/UseStateBasicCounter";
import UseStateThreeFunctionsCounter from "./functionalComponents/useStateHook/UseStateThreeFunctionsCounter";
import UseStateWithArray from "./functionalComponents/useStateHook/UseStateWithArray";
import UseStateWithObject from "./functionalComponents/useStateHook/UseStateWithObject";

function App() {
  return (
    <div className="App">
      <div>
        <h2>01. useState() Hook</h2>

        <div className="useState-section">
          <ClassCounter />
          <UseStateBasicCounter />
        </div>

        <div className="useState-section">
          <UseStateThreeFunctionsCounter />
        </div>

        <div className="useState-section">
          <UseStateWithArray />
        </div>

        <div className="useState-section">
          <UseStateWithObject />
        </div>
      </div>
    </div>
  );
}

export default App;
