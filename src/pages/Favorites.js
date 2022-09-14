import FavoritesContext from "../store/favorites-context"
import { useContext } from "react"
import MeetupList from "../components/meetups/MeetupList"

function FavoritesPage() {

    const favoriteCtx = useContext(FavoritesContext)
    const favorites = favoriteCtx.favorites

    let content ;

    if(favoriteCtx.totalFavorites === 0){
        content = <p>You got no favorites . Start adding some ? </p>
    }else{
        content = <MeetupList meetups = {favorites} />

    }

    return(
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>

    ) 
}

export default FavoritesPage