import "./App.css";
// import Card from "./components/sync-state/card";
import Accordion from "./components/sync-state/accordian";
import { useState } from "react";


function App() {
  // const [name, setName] = useState("")
 
  return (
    <>
   {/* <Card title="card1" name={name} setName={setName}/>
   <Card title="card2" name={name} setName={setName}/> */}

   <Accordion />
   
    
    </>
  );
}

export default App;
