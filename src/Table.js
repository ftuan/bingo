import React, { Component } from 'react';
import './Table.css';

function Row(props) {
  const hasFree = props.free == null || props.free,
      cells = [];
  for (var i = props.start; i < props.end; i++) {
    if (hasFree && i === Math.floor(props.numbers.length / 2)) {
      cells.push(<td key={i} id="free">♡</td>);
    } else {
      cells.push(<td key={i}>{props.numbers[i]}</td>);
    }
  }

  return <tr>{cells}</tr>;
}

class Table extends Component {

  constructor(props) {
    super(props);

    this.size = props.rows * props.cols;
    this.numbers = [];

    for (var i = 1; i <= this.size; i++) {
      this.numbers.push(i);
    }

    if (props.shuffle == null || props.shuffle) {
      shuffle(this.numbers);
    }
  }

  render() {
    const rows = [];

    for (var i = 0; i < this.size; i += this.props.cols) {
      rows.push(<Row numbers={this.numbers} start={i} end={i+this.props.cols} free={this.props.free} key={i} />);
    }

    return (
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

export default Table;