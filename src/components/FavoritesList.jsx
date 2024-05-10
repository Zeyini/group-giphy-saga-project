import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import FavoritesItem from "./FavoritesItem";


function FavoritesList() {

    const categories = useSelector(store => store.categories);
    const favorites = useSelector(store => store.favorites);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: 'GET_PHOTO', payload: 'cats'});
        getCategories();
        getFavorites();
    }, []);

    const getFavorites = () => {
        dispatch({
            type: 'GET_FAVORITES'
        })
    }

    const getCategories = () => {
        dispatch({
            type: 'GET_CATEGORIES'
        })
    }
    

    return (
        <section>   
            {JSON.stringify(favorites)}
            {favorites.map(favorite => {
                return (
                    <FavoritesItem favorite={favorite}
                                   categories={categories}/>
                )
            })}
        </section>          
    )
}

export default FavoritesList;