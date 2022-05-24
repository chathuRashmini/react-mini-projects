import ClassCounterUseeffect from "./classComponents/ClassCounterUseeffect";
import ClassCounterUsestate from "./classComponents/ClassCounterUsestate";
import ClassIntervalUseeffect from "./classComponents/ClassIntervalUseeffect";
import ClassMouseUseeffect from "./classComponents/ClassMouseUseeffect";
import FetchPost from "./functionalComponents/useEffectHook/FetchPost";
import FetchPosts from "./functionalComponents/useEffectHook/FetchPosts";
import MouseContainer from "./functionalComponents/useEffectHook/MouseContainer";
import UseEffectBasicCounter from "./functionalComponents/useEffectHook/UseEffectBasicCounter";
import UseEffectInterval from "./functionalComponents/useEffectHook/UseEffectInterval";
import UseEffectMouse from "./functionalComponents/useEffectHook/UseEffectMouse";
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
          <ClassCounterUsestate />
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

      <div>
        <h2>02. useEffect() Hook</h2>

        <div className="useState-section">
          <ClassCounterUseeffect />
          <UseEffectBasicCounter />
        </div>

        {/* <div className="useState-section">
          <ClassMouseUseeffect />
          <MouseContainer />
        </div> */}

        <div className="useState-section">
          <ClassIntervalUseeffect />
          <UseEffectInterval />
        </div>

        <div className="useState-section">
          <FetchPosts />
        </div>

        <div className="useState-section">
          <FetchPost />
        </div>
      </div>
    </div>
  );
}

export default App;
