import React, { useState } from 'react';

function Search(props) {
  

   const handleInput = (e) => {
     e.preventDefault();
    props.onSubmit(e.target.value);
}

  return (
    <div className="mb-12">
      <form onSubmit={handleInput}>
     <input className="mt-12 bg-gray-100 py-2 px-4" type="text" placeholder="Search city" />
     <button type="submit">Search Weather</button>
    </form>
    </div>
  );
}

export default Search;