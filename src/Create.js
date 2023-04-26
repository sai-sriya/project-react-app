import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from "./Home";
import "./Create.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase-config";

const Create = () => {
    const n = useNavigate()
    function home() {
        n("/home");
    }
    function logout() {
        n("/")
    }
    const [title, setTitle] = useState("")
    const [postText, setPostText] = useState("")

    const postcollectionref = collection(db, "posts")
    const createpost = async () => {
        await addDoc(postcollectionref, { title, postText });
        n("/home")
    };

    return (
        <div className='createbox'>
            <div className='home'>
                <div className='name'>Travel Geek</div>
                <div className='buttons'>
                    <button onClick={home}>Home</button>
                    <button>Create</button>
                    <button onClick={logout}>Log out</button>
                </div>
            </div>
            <div className='main'>
                <div className='post_details'>
                    <div className='title'>
                        <label style={{ color: "black" }}>Title</label>
                        <div><input type="text" placeholder='title' className='texts'
                            onChange={(event) => {
                                setTitle(event.target.value);
                            }} /></div>
                    </div>
                    <div className='description'>
                        <label style={{ color: "black" }}>Description</label>
                        <div className='text'><textarea className="texts" style={{ outline: "none" }} placeholder='description'
                            onChange={(event) => {
                                setPostText(event.target.value);
                            }}
                        /></div>
                    </div>
                    <button className='submit' onClick={createpost}>submit post</button>
                </div>
            </div>

        </div>
    )
}

export default Create;