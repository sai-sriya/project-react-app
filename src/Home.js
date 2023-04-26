import React, { useState, useEffect } from 'react';
import "./Home.css";
import Create from './Create';
import { useNavigate } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import { db } from "./firebase-config";

const Home = () => {
    const [postlists, setpostlists] = useState([]);
    const postcollectionref = collection(db, "posts")
    const nav = useNavigate();
    function creating() {
        nav("/create")
    }
    function logout() {
        nav("/")
    }

    useEffect(() => {
        const getposts = async () => {
            const data = await getDocs(postcollectionref);
            setpostlists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getposts();
    });


    return (
        <div className='homecard'>
            <div className='home'>
                <div className='name'>Travel Geek</div>
                <div className='buttons'>
                    <button>Home</button>
                    <button onClick={creating}>Create</button>
                    <button onClick={logout}>Log out</button>
                </div>
            </div>
            <div className='content'>
                <div>{postlists.map((post) => {
                    return (
                        <div className='homemain'>
                            <div className='titleposted'>
                                <h1 className='post'>{post.title}</h1>
                            </div>
                            <div className='postedcontent'>
                                <div className='boxcontent'>{post.postText}</div>
                            </div>
                        </div>
                    )
                })}</div>
            </div>
        </div>

    )
}

export default Home;

