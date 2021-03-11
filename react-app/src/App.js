import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Cody', age: 26 },
      { name: 'Allie', age: 30 },
      { name: 'Nathan', age: 35 }
    ],
    showPersons: false
  }
  swithNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: 'Cody', age: 2 },
        { name: newName, age: 30 },
        { name: 'Nathan', age: 102 }
      ]
    })
  }
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Cody', age: 2 },
        { name: 'Allie', age: 30 },
        { name: event.target.value, age: 102 }
      ]
    })
  }
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if( this.state.showPersons ) {
      <div>
        {this.state.persons.map(person => {
          return <Person
            name={person.name}
            age={person.age}  />
        })}
      </div>
    }

    return (
       //* React converts the below JSX to HTML.
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <button
          onClick={this.togglePersonHandler}
          style={style}>Switch Name
        </button>
        { persons }
      </div>
      // * JSX gets compiled into the React code below. That is why we import React. JSX code calls React.createElement()
    //  React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
    );
  }
}

export default App;


/*
const app = props => {
  useState can be used as many times as you want
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Cody', age: 26 },
      { name: 'Allie', age: 30 },
      { name: 'Nathan', age: 35 }
    ]
  })
  const switchNameHandler = () => {
    setPersonsState({
      Changing state this way does not automatically merge the other data in state
      persons: [
        { name: 'Cody', age: 2 },
        { name: 'Allison', age: 30 },
        { name: 'Nathan', age: 102 }
      ]
    })
  }
  return (
      //* React converts the below JSX to HTML.
    <div className="App">
      <h1> Hi, I'm a React App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age} >My Hobbies: Coding</Person>
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click={switchNameHandler} />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age} />
    </div>
     * JSX gets compiled into the React code below. That is why we import React.
    React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
  );
}
*/
