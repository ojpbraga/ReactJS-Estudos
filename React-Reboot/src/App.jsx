import Challenge_01 from "./classes/Challenge_01";
import Components from "./classes/Components"
import Events from "./classes/Events"
import OneReboot from "./classes/oneReboot"
import Props from "./classes/Props";
import UseEffect from "./classes/UseEffect";
import UseRef from "./classes/UseRef";
import UseState from "./classes/UseState";

function App() {

  const Test = () => {
    const active = true;
    if(active) {
      return <p>True</p>;
    } else {
      return null;
    }
  }

  return (
    <>
      <OneReboot/>
      <Events/>
      <Components/>
      <Props title="Pros"/>
      <Challenge_01/>
      <UseState/>
      <UseEffect/>
      <UseRef/>
    </>
  )
}

export default App
