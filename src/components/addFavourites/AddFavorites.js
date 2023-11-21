import React,{ useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFavorites } from '../../reducer/artistReducer';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { filterArray } from './helpers';

function AddFavorites({event}) {
    const [favorite, setFavorite] = useState(false)
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.artist.favorites)

    const handleFavorite = (event) => {
        setFavorite(!favorite)
        const favArr = filterArray(favorites,event)
        dispatch(addFavorites(favArr))
    }

  return (
    <div className='favorites-container' onClick={() => handleFavorite(event)}>
        {favorite ? <StarOutlinedIcon fontSize="large" /> : <StarOutlineOutlinedIcon fontSize="large" />}
    </div>
  )
}

export default AddFavorites