import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {addDoc,collection} from "firebase/firestore";
import { auth,db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import '../../App.css';
import { useNavigate } from "react-router-dom";


interface AddFormData {
    title:string
    description: string
}

export const AddForm = () => {
    
    const [user]= useAuthState(auth);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        title: yup.string().required("Title is required."),
        description: yup.string().required("Description is required.")

    });

    const {register, handleSubmit, formState: {errors}} = useForm <AddFormData> ({
        resolver: yupResolver(schema),
    })
    
    const postRef = collection(db,"posts");

    const onAddPost = async (data:AddFormData) => {
        await addDoc(postRef,{
            ...data,
            username: user?.displayName,
            id: user?.uid,

        });

        navigate("/");
    };
    return (
        <div className="post-form">
        <form onSubmit={handleSubmit(onAddPost)} className="form">
            <input className="input-field" type="text" placeholder="Title..." {...register("title")} />
            <p className="error-message">{errors.title?.message}</p>
            <textarea className="input-field" placeholder="Description..." {...register("description")} />
            <p className="error-message">{errors.description?.message}</p>
            <input className="submit-button" type="submit" value="Submit" />
        </form>
    </div>
    
    );
}