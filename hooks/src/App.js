import React, { createContext } from "react";

import ClassCounterUseeffect from "./classComponents/ClassCounterUseeffect";
import ClassCounterUsestate from "./classComponents/ClassCounterUsestate";
import ClassIntervalUseeffect from "./classComponents/ClassIntervalUseeffect";
import ClassMouseUseeffect from "./classComponents/ClassMouseUseeffect";
import DummyApp from "./DummyApp";
import UsecallbackAccurateParent from "./functionalComponents/useCallbackHook/UsecallbackAccurateParent";
import UsecallbackParent from "./functionalComponents/useCallbackHook/UsecallbackParent";
import UsecontextCompA from "./functionalComponents/useContextHook/UsecontextCompA";
import UsecontextCompD from "./functionalComponents/useContextHook/UsecontextCompD";
import FetchPost from "./functionalComponents/useEffectHook/FetchPost";
import FetchPosts from "./functionalComponents/useEffectHook/FetchPosts";
import MouseContainer from "./functionalComponents/useEffectHook/MouseContainer";
import UseEffectBasicCounter from "./functionalComponents/useEffectHook/UseEffectBasicCounter";
import UseEffectInterval from "./functionalComponents/useEffectHook/UseEffectInterval";
import UsereducerCounter from "./functionalComponents/useReducerHook/UsereducerCounter";
import UsereducerCounterThree from "./functionalComponents/useReducerHook/UsereducerCounterThree";
import UsereducerCounterTwo from "./functionalComponents/useReducerHook/UsereducerCounterTwo";
import UsereducerFetchData from "./functionalComponents/useReducerHook/UsereducerFetchData";
import UseStateBasicCounter from "./functionalComponents/useStateHook/UseStateBasicCounter";
import UsestateFetchData from "./functionalComponents/useStateHook/UsestateFetchData";
import UseStateThreeFunctionsCounter from "./functionalComponents/useStateHook/UseStateThreeFunctionsCounter";
import UseStateWithArray from "./functionalComponents/useStateHook/UseStateWithArray";
import UseStateWithObject from "./functionalComponents/useStateHook/UseStateWithObject";

export const UserContext = createContext()
export const ChannelContext = createContext()

function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: "silver" }}>
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

      <div style={{ backgroundColor: "gold" }}>
        <h2>02. useEffect() Hook</h2>

        <div className="useState-section">
          <ClassCounterUseeffect />
          <UseEffectBasicCounter />
        </div>

        <div className="useState-section">
          <ClassMouseUseeffect />
          <MouseContainer />
        </div>

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

      <div style={{ backgroundColor: "burlywood" }}>
        <h2>03. useContext() Hook</h2>

        <div className="useState-section">
          <UserContext.Provider value={'Edward Cullen'}>
            <ChannelContext.Provider value={'Biology'}>
              <UsecontextCompA />
            </ChannelContext.Provider>
          </UserContext.Provider>
        </div>

        <div className="useState-section">
          <UserContext.Provider value={'Edward Cullen'}>
            <ChannelContext.Provider value={'Biology'}>
              <UsecontextCompD />
            </ChannelContext.Provider>
          </UserContext.Provider>
        </div>
      </div>

      <div style={{ backgroundColor: "lightblue" }}>
        <h2>04. useReducer() Hook</h2>

        <div className="useState-section">
          <UsereducerCounter />
          <UsereducerCounterTwo />
        </div>

        <div className="useState-section">
          <UsereducerCounterThree />
        </div>

        <div className="useState-section">
          <DummyApp />
        </div>

        <div className="useState-section">
          <UsestateFetchData />
          <UsereducerFetchData />
        </div>
      </div>

      <div style={{ backgroundColor: "lightgreen" }}>
        <h2>05. useCallback() Hook</h2>

        <div className="useState-section">
          <UsecallbackParent />
          <UsecallbackAccurateParent />
        </div>
      </div>
    </div>
  );
}

export default App;
