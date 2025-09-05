// How to handle lists in React using map function
// list methods: map, filter, reduce, find, findIndex, etc.
// Key prop: A special string attribute you need to include when creating lists of elements. Keys help React identify which items have changed, are added, or are removed.
// List can be edited, deleted, or added dynamically using push, pop, splice, etc.  

import React from 'react';

const numbers = [1, 2, 3, 4, 5];

const List = () => {
  return (
    <div>
      {numbers.map(number => (
        <ul key={number}>
            <li>{number}</li>
        </ul>
      )) }
    </div>
  )
}

export default List;
