import { useSelector } from "react-redux";
import FavoritesItem from "../FavoritesItem";

function Favorites() {

const favorites = useSelector(store => store.favorities);


    return (
        <section>   
            {favorites.map(favorite => {
                return (
                    <FavoritesItem favorite={favorite}/>
                )
            })}
        </section>          
    )
}

export default FavoritesList;