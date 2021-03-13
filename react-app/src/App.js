import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 'eWefdweji', name: 'Cody', age: 26 },
      { id: 'aejriom38', name: 'Allie', age: 30 },
      { id: 'adedqwer', name: 'Nathan', age: 35 }
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
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if( this.state.showPersons ) {
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
          color: 'black'
      }
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      )
    }

    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
       //* React converts the below JSX to HTML.
      <StyleRoot >
        <div className="App">
          <h1> Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is working!</p>
          <button
            onClick={this.togglePersonHandler}
            style={style}>Switch Name
        </button>
          {persons}
        </div>
      </StyleRoot>
         // * JSX gets compiled into the React code below. That is why we import React. JSX code calls React.createElement()
        // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
    );
  }
}

export default Radium(App);


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
