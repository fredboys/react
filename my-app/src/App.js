import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallBack from './components/StatefulGreetingWithCallBack';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Mike" age="32" />
      <StatefulGreeting greeting="Im a stateful class component" name="Freddie"/>
      <StatefulGreetingWithCallBack greeting="Im a stateful class component" name="Freddie"/>
      <StatefulGreetingWithPrevState greeting="Im a stateful class component" name="Freddie"/>
    </div>
  );
}

export default App;
