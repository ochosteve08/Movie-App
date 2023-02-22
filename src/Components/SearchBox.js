import React from 'react'

const SearchBox = ({search,handleChange}) => {
  return (
    <div className='d-flex col-sm-4'>
      <input className='form-control' type="text" placeholder="search movie...." value={search} onChange={handleChange} />
    </div>
  );
}

export default SearchBox