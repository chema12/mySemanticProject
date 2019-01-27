import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListLayout from './list-layout';
import './list-layout.css';
import List from './list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ListLayout>
            <h2 className="list-layout">LISTA DE USUARIOS</h2>
            {
              this.props.data.profiles.map(element => {
                return (                  
                  <div className="list-layout">                    
                    <List mainItem etiqueta={`${this.props.data.users[element.userID].name}:`} />
                    <List etiqueta={`Usuario: ${this.props.data.users[element.userID].userName}`}/>                  
                    <List etiqueta={`Película Favorita: ${this.props.data.movies[element.favoriteMovieID].name}`}/>                  
                  </div>
                );
              })
            }
          </ListLayout>          
        </header>
      </div>
    );
  }
}

export default App;
