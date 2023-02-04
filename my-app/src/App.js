import logo from './logo.svg';
import './App.css';
// import EventsFunctional from './components/EventsFunctional';
// import EventsClass from './components/EventsClass';
import EventsBinding from './components/EventsBinding';
// import FunctionalGreeting from './components/FunctionalGreeting';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithCallBack from './components/StatefulGreetingWithCallBack';
// import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Mike" age="32" />
      <StatefulGreeting greeting="Im a stateful class component" name="Freddie"/>
      <StatefulGreetingWithCallBack greeting="Im a stateful class component" name="Freddie"/>
      <StatefulGreetingWithPrevState greeting="Im a stateful class component" name="Freddie"/> */}
      {/* <EventsFunctional />
      <EventsClass /> */}
      <EventsBinding />
    </div>
  );
}

export default App;
