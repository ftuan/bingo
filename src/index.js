import React from 'react';
import ReactDOM from 'react-dom';
import Sheet from './Sheet';
import Table from './Table';
import './index.css';

var sheets = [];
for (var i = 0; i < 25; i++) {
  sheets.push(
    <Sheet key={i}>
      <h1>Valentine's Bingo</h1>
      <div>♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡</div>
      <Table cols={5} rows={5} />
      <div>♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡</div>
    </Sheet>
  );
}

ReactDOM.render(
  <div>
    {sheets}
    <Sheet>
      <h1>Cut Outs</h1>
      <Table cols={5} rows={5} free={false} shuffle={false} />
    </Sheet>
  </div>,
  document.getElementById('root')
);
