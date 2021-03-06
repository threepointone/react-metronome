import React from 'react';
import {Metronome} from '../src';

export class App extends React.Component{
  render(){
    return <Metronome period={1000} onTick={::console.log}>{
      value => <div>{`tick: ${value}`}</div>
    }</Metronome>;
  }
}
