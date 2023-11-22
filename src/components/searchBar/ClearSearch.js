import React from 'react'
import { useDispatch } from 'react-redux'
import { resetState } from '../../reducer/artistReducer'
import './search.css'


function ClearSearch() {

    const dispatch = useDispatch()

  return (
    <div className='btn-search-container d-flex justify-content-center'>
        <span role='button' aria-label='clear-search' className='btn-border favorites-link clear-search'
        onClick={() => dispatch(resetState())}>Clear Search</span>
    </div>
  )
}

export default ClearSearch