import * as React from 'react';
import Square from './Square';

const Row = ({id, cellArray, onClick}) => {
  let cells = [];
  for (let i = 0; i < cellArray.length; i++) {
    cells.push(
      <Square
        rowId={id}
        cellId={i}
        dimension={cellArray.length}
        value={cellArray[i]}
        key={i}
        onClick={onClick}
      />
    );
  }
  
  return (
    <div className="pure-g">
      {cells}
    </div>
   );
 }

 export default Row;