import './App.css';
import Todolist from './Todolist';
import './Todolist.css';

function App() {
  return (
    <div className="App"><div className="ABC">
<Todolist /></div>
</div>
  );
}

const Job = (props) => {
  return(
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
<h2>Done</h2>
    </div>
  );
};

export default App;
