import * as React from 'react';
import Counter from './Counter';
import Board from './board/Board';

export default class App extends React.Component {
  constructor() {
    super();
    const dimension = 6;
    this.state = {
      cells: this.getInitCells(dimension)
    };
  }
  
  getInitCells(dimension) {
    let cells = [];
    for (let i = 0; i < dimension; i++) {
      cells[i] = [];
      
      for (let j = 0; j < dimension; j++) {
        cells[i][j] = 0;
      }
    }
    return cells;
  }

  handleCellClick = (rowId, cellId) => {   
    this.state.cells[rowId][cellId]++;
    if (this.state.cells[rowId][cellId] > 3) {
      this.state.cells[rowId][cellId] = 0;
    }
    
    this.setState({
      cells: this.state.cells
    })
  }
  
  render() {
    return (
      <div className="page">
        <Counter cells={this.state.cells} />
        <Board
          cellMatrix={this.state.cells}
          onClick={this.handleCellClick}
        />      
      </div>
    );
  }
}