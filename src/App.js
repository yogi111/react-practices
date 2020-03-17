import React, {Component} from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
    state = {
        userInput: '',
    };
    inputChangeHandler = (event) => {
        this.setState({
            userInput: event.target.value
        });
    };
    deleteCharHandler = (index) => {
        const userInputArray = this.state.userInput.split('');
        userInputArray.splice( index, 1);
        this.setState({
            userInput : userInputArray.join('')
        })
    };

    render() {
        const characters = this.state.userInput.split('').map((char, index) => {
                return (
                    <Char character={char} key={index}
                          clicked={() => this.deleteCharHandler(index)}
                    />
                )
            }
        );

        return (
            <div className="App">
                <input type="text" onChange={(event) => this.inputChangeHandler(event)}
                       value={this.state.userInput}/>
                <p>{this.state.userInput}</p>
                <Validation inputlength={this.state.userInput.length}/>
                {characters}
            </div>
        );
    }
}

export default App;
