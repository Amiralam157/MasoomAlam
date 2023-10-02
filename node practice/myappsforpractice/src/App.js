import './App.css';
import Person from './component/Person';

function App() {
  return (
    <div className="App">
      <h1>
        <Person name={this.state.Person[0].name} age={this.state.Person[0].age}></Person>
        {/* <Person /> */}
      </h1>

    </div>
  );
}

export default App;
