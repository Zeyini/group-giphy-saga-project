
import './FavoritesItem.css';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select'


function FavoritesItem({ favorite, categories }) {

const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div className="favorite-item">
      <ul className="favorite-list" key={favorite.id}>
        <li>
          <img src={favorite.url} />
          {favorite.title}
          <InputLabel id="select-category">category</InputLabel>
            <Select
                labelId="select-category"
                value={selectedCategory}
                onChange={(e) => {setSelectedCategory(e.target.value)}}
                className={classes.select}>
                {categories.map(category => {
                  return (
                    <MenuItem key={category.id}
                              value={category.id}
                              category={category}>{category.name}
                    </MenuItem>
                  )
                })}
            </Select>
          <div>{favorite.category_id}</div>
        </li>
      </ul>
    </div>
  );
}

export default FavoritesItem;
