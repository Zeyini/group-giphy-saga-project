
import Select from '@material-ui/core/Select';
import './FavoritesItem.css';
import DropdownItem from './DropdownItem';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default function FavoritesItem({ favorite }) {

  const categories = useSelector(store => store.categories);


  return (
    <div className="favorite-item">
      <ul className="favorite-list" key={favorite.id}>
        <li>
          <img src={favorite.url} />
          {favorite.title}
          <InputLabel id="select-category">category</InputLabel>
            <Select>
                labelId="select-category"
                value={selectedValue}
                onChange={(e) => {setSelectedValue(e.target.value)}}
                className={classes.select}
                {categories.map(category => {
                    <MenuItem key={category.id}
                              value={category.id}
                              category={category}>{category.name}
                    </MenuItem>
                })}
            </Select>
          <div>{favorite.category_id}</div>
        </li>
      </ul>
    </div>
  );
}
