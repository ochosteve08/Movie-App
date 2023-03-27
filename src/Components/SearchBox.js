import React from 'react'

const SearchBox = ({search,handleChange}) => {
  return (
    <div className='d-flex col'>
      <input className='form-control' type="search" placeholder="search movie...." value={search} onChange={handleChange} />
    </div>
  );
}

export default SearchBox