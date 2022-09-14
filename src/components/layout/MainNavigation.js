import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation () {

    const favoriteCtx = useContext(FavoritesContext)

    return (
        <header className={classes.header} >
            <div className={classes.logo} >React MeetUps</div>
                <nav>
                    <ul>
                        <li>
                        <Link to = "/" >My MeetUps</Link>
                        </li>
                        <li>
                        <Link to = "/new-meetup" >Add New MeetUp</Link>
                        </li>
                        <li>
                        <Link to = "/favorites" >
                            My Favorites
                            <span className={classes.badge}>{favoriteCtx.totalFavorites}</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
        </header>
    );
}

export default MainNavigation