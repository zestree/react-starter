import * as React from 'react';

export default class Square extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.rowId, this.props.cellId);
  }
  
  shouldComponentUpdate(nextProps) {
      return nextProps.value !== this.props.value;
  }

  componentWillUpdate() {
    console.log('render square');
  }

  render() {

    let styleClass = 'square pure-u-1-' + this.props.dimension;
    if (this.props.value === 1) {
      styleClass += ' red';
    }
    else if (this.props.value === 2) {
      styleClass += ' green';
    }
    else if (this.props.value === 3) {
      styleClass += ' blue';
    }
  
    let squareHeight = 500 / this.props.dimension;
    return (
      <div
        className={styleClass}
        style={{height: squareHeight}}
        onClick={this.handleClick}
      >
      </div>
    );    
  }
}