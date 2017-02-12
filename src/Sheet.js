import React from 'react';
import './Sheet.css';

function Sheet(props) {
  return (
    <div className="sheet valign">
      {props.children}
    </div>
  );
}

export default Sheet;