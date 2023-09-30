import {auth,provider} from "../config/firebase";
import {signInWithPopup} from "firebase/auth";
import {useNavigate} from "react-router-dom";

export const Login = () => {
    const navigate=useNavigate();
    const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth,provider);
    console.log(result);
    navigate("/");


    };
    return (
    <div className="google-signin">
    <p className="signin-text">Sign in with Google</p>
    <button className="signin-button" onClick={signInWithGoogle}>Sign in with Google</button>
</div>

);

};