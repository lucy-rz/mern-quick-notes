import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-services';

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <nav>
            <Link to="/notes">Notes</Link>
            &nbsp; | &nbsp;
            <Link to="/notes/new">New note</Link>
            &nbsp;&nbsp;
            <span>Welcome, { user.name }, write a note (:</span>
            &nbsp;&nbsp;
            <Link to="" onClick={ handleLogOut }>Log out</Link>
        </nav>
    );
}