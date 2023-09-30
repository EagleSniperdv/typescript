import {Link} from "react-router-dom";
import {auth} from "../config/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {signOut} from "firebase/auth";
import '../App.css';

export const Navbar = () => {
    const [user] = useAuthState(auth);
    const signUserOut = async () => {
        await signOut(auth);
    };
    return (
        <div className="main-container">
        <Link to="/" className="nav-link">Home</Link>
        { !user ?(<Link to="/login" className="nav-link">Log-in</Link>)
        :
        (<Link to="/add-post" className="nav-link">Add Post</Link>
        )}
        <div className="user-info">
            {user && (
                <>
                    <p className="user-name">{user?.displayName}</p>
                    <img className="user-avatar" src={user?.photoURL || ""} alt="profile" />
                    <button className="logout-button" onClick={signUserOut}>Log out</button>
                </>
            )}
        </div>
    </div>
    
    );
};