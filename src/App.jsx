import { useEffect, useState } from "react"
import ExtensionCard from "./components/ExtensionCard"

function App(){

  const [extensions, setExtensions] = useState([])

  useEffect(()=>{
    fetch("data.json")
    .then(val => val.json())
    .then(adat => setExtensions(adat)
    )
  },[])

  return (<>
  <h1>Hello React!</h1>
  <div className="cardWrapper">
    { extensions.map(extension => <ExtensionCard {...extension} />) }
  </div>
  </>)
}

export default App