import logo from './logo.svg';
import './App.css';
// import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
// import StatefulGreeting from "./components/StatefulGreeting";
// import StatefulGreetingWithPrevState from "./components/StatefulGreetingWithPrevState";
// import EventsFunctional from "./components/EventsFunctional";
// import EventsClass from "./components/EventsClass";
// import EventsBinding from "./components/EventsBinding";
// import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
// import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";
// import NestingComponents from "./components/NestingComponents";
import MethodsAsPropsParent from "./components/MethodsAsPropsParent";


function App() {
  return (
    <div className="App">
      <MethodsAsPropsParent />
    </div>
  );
}

/* function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Mike" age="32" />
    </div>
  );
} */

export default App;
