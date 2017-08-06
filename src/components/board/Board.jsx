import * as React from 'react';
import Row from './Row';

const Board = (props) => {
   let {cellMatrix, onClick} = props;
   let rows = [];
   for (let i = 0; i < cellMatrix.length; i++) {
     rows.push(
       <Row
         cellArray={cellMatrix[i]}
         id={i}
         key={i}
         onClick={onClick}
       />);
   }

   return (
    <div className="board">
      {rows}
    </div>
   );
}

export default Board;