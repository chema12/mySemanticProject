import React, { Component } from 'react';
import './App.css';
import ListLayout from './list-layout';
import './list-layout.css';
import Label from './label';
import Button from './button';
import ButtonLayout from './button-layout';
import ResultLayout from './result-layout';

const v1 = Math.floor(Math.random() * 100);
const v2 = Math.floor(Math.random() * 100);
const v3 = Math.floor(Math.random() * 100);
const propAnswer = Math.floor(Math.random() * 3) + v1 + v2 + v3;

class App extends Component {
  state = {
    v1,
    v2,
    v3,
    propAnswer,
    rightAnswer: 0,
    totalAnswer: 0,
    ratio: 0,
    labelColor: 'white'
  }

  handleClick = (choice) => {
    let rightAnswer = this.state.rightAnswer;
    let totalAnswer = this.state.totalAnswer;
    let ratio = 0;
    if (choice) {
      if (propAnswer === v1+v2+v3) {
        rightAnswer += 1;
        totalAnswer += 1;
        ratio = rightAnswer / totalAnswer * 100;
        this.setState({
          rightAnswer,
          totalAnswer,
          ratio
        });
      } else {
        totalAnswer += 1;
        ratio = rightAnswer / totalAnswer * 100;
        this.setState({
          totalAnswer,
          ratio
        });
      }
    } else {
      if (propAnswer === v1+v2+v3) {
        totalAnswer += 1;
        ratio = rightAnswer / totalAnswer * 100;
        this.setState({
          totalAnswer,
          ratio
        });
      } else {
        rightAnswer += 1;
        totalAnswer += 1;
        ratio = rightAnswer / totalAnswer * 100;
        this.setState({
          rightAnswer,
          totalAnswer,
          ratio
        });
      }
    }
    if (ratio > 50) {
      this.setState({
        labelColor: 'green'
      });
    } else if (ratio == 50) {
      this.setState({
        labelColor: 'yellow'
      });
    } else {
      this.setState({
        labelColor: 'red'
      });
    }
    this.setState({
      v1: Math.floor(Math.random() * 100),
      v2: Math.floor(Math.random() * 100),
      v3: Math.floor(Math.random() * 100),
      propAnswer: Math.floor(Math.random() * 3) + v1 + v2 + v3
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ListLayout>
            <h2 className="list-layout">MATEMÁTICAS MENTALES</h2>
            <Label value={this.state.v1}/>
            <Label value={'+'}/>
            <Label value={this.state.v2}/>
            <Label value={'+'}/>
            <Label value={this.state.v3}/>
            <Label value={'='}/>
            <Label value={this.state.propAnswer}/>
          </ListLayout>
          <ButtonLayout>
            <Button className={'right'} etiqueta={'Right ' + String.fromCodePoint(0x1F44D)} onClick={() => this.handleClick(true)}/>
            <Button className={'wrong'} etiqueta={'Wrong ' + String.fromCodePoint(0x1F44E)} onClick={() => this.handleClick(false)}/>
          </ButtonLayout>
          <ResultLayout>
            <Label value={'Resultado: '}/>
            <Label value={this.state.rightAnswer + '/' + this.state.totalAnswer }/>
            <Label value={this.state.ratio} style={{marginLeft: 50+'px', color: this.state.labelColor}}/>            
          </ResultLayout>          
        </header>
      </div>
    );
  }
}

export default App;
