import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Greet from './components/Greet';
//import Greetclass from './components/Greetclass';
//import Count from './count';
// import EventBind from './components/EventBind';
//import ParentComponent from "./components/ParentComponent";
// import ConditionalRendering from './components/ConditionalRendering';
// import ListRendering from './components/ListRendering';
import NameList from './components/NameList';
function App() {
  return (
    <div className="App">
        {/* <Greet name = "Adeeb" roll = "1324">
       <p>This is my name</p>
       </Greet>
       <Greet name = "Shad" roll = "1563">
       <p> this is not my name </p>
       </Greet> 
       <Greetclass name = "Gadha" roll = "1005">
         <p>
           Hi how r u?
         </p>

        </Greetclass> 
       <Count /> */}
       {/* <EventBind /> */}
       {/* <ParentComponent /> */}
      
      {/* <ConditionalRendering /> */}
       {/* <ListRendering /> */}
      <NameList />
    </div>
  );
}

export default App;
