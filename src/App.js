import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListLayout from './list-layout';
import './list-layout.css';
import List from './list';

class App extends Component {
  render() {
    const lista = [];
    for (let i = 1; i <= 5; i++) {
      let existUsers = false;
      const filaUsuario = (
        <div key={i+'-div'} className="list-layout">
          <List key={this.props.data.movies[i].name} mainItem etiqueta={`${this.props.data.movies[i].name}`} />
          <List key={this.props.data.movies[i].name+'intro'} level={1} etiqueta={'Liked By:'} />
          {            
            this.props.data.profiles.map((element, index) => {              
              if(element.favoriteMovieID == i) {
                existUsers = true;
                return (
                  <List key={i+index+'B'} level={2} etiqueta={`- ${this.props.data.users[element.userID].name}`}/>  
                );
              }
            })
          }
        </div>
      );
      const withoutUsers = (
        <div key={i+'-div'} className="list-layout">
          <List key={this.props.data.movies[i].name} mainItem etiqueta={this.props.data.movies[i].name} />
          <List key={this.props.data.movies[i].name+'outOfUsers'} level={1} etiqueta={'None of the current users liked this movie'} />
        </div>
      );          
      if (existUsers) lista.push(filaUsuario);
      else lista.push(withoutUsers);
    }
    return (
      <div className="App">
        <header className="App-header">
          <ListLayout>
            <h2 className="list-layout">LISTA DE PELÍCULAS</h2>
            {lista}
          </ListLayout>          
        </header>
      </div>
    );
  }
}

export default App;
