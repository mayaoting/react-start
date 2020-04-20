import React from 'react';

function NumberList(props) {
  const numbers = props.numbers;
  const ListItems = numbers.map((number) => 
    <li>{number}</li>
  );
  return (
    <ul>{ListItems}</ul>
  );
}

export default NumberList;