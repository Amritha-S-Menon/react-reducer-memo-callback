import logo from './logo.svg';
import './App.css';
import ReducerCounter from './Components/Reducer-counter';
import MultipleReducerCounter from './Components/MultipleReducerCounter';
import FocusRefHooks from './Components/FocusRefHooks';
import TimerRefHook from './Components/TimerRefHook';
import TimerRefHookOne from './Components/exampleTime';

function App() {
  return (
    <div className="App">
      var tabs = require('count-tabs')(function (up) {
  document.getElementById('tabs_counter').innerText = up
})

document.getElementById('my_id').innerText = tabs.id
    </div>
  );
}

export default App;
