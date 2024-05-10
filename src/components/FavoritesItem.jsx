
import './FavoritesItem.css';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel';
import {useState} from 'react';
import { useDispatch } from 'react-redux';

function FavoritesItem({ favorite, categories }) {

const [selectedCategory, setSelectedCategory] = useState('');

const dispatch = useDispatch();

const saveCategory = (event) => {
    let favId = favorite.id;
    dispatch({
        type: 'UPDATE_FAVORITE_CATEGORY',
        payload: {category: selectedCategory, id: favId}
    })
}


  return (
    <div className="favorite-item" key={favorite.id}>
      <ul className="favorite-list" >
        <li>
          <img src={favorite.url} />
          {favorite.title}
          <InputLabel id="select-category">category</InputLabel>
            <Select
                labelId="select-category"
                value={selectedCategory}
                onChange={(e) => {setSelectedCategory(e.target.value)}}>
                {categories.map(category => {
                  return (
                        <MenuItem value={category.id}
                                key={category.id}>{category.name}
                        </MenuItem>
                  )
                })}
            </Select>
            <button onClick={saveCategory}>submit</button>
        </li>
      </ul>
    </div>
  );
}

export default FavoritesItem;
