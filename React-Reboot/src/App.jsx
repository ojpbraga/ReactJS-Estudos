import Components from "./classes/Components"
import Events from "./classes/Events"
import OneReboot from "./classes/oneReboot"

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
    </>
  )
}

export default App
