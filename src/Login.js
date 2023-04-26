import React from "react";
import "./Login.css";
import { useNavigate, NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import { useState } from "react";


function Login() {

    const [email, setEmail] = useState("");
    const [emailcheck, setemailCheck] = useState("");
    const [password, setpassword] = useState("");
    const [passcheck, setpassCheck] = useState("");
    const [confirm, setconfirm] = useState("");
    const [confirmcheck, setconfirmcheck] = useState("");
    const [check, setCheck] = useState(false);
    const [mode, setMode] = useState(true);
    const navigate = useNavigate();

    function open() {

        if (email.trim().length !== 0 && password.trim().length !== 0) {
            navigate("/home");
        }
        else {
            setCheck(true);
            alert("please enter valid details");
        }
    }

    const emailvalidation = (e) => {
        const pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
        const a = e.target.value;
        setEmail(a);
        if (email.match(pattern)) {
            setCheck(false);
            setemailCheck(false);
        }
        else {
            setCheck(true);
            setemailCheck(true);
        }
    }

    const passwordvalidation = (e) => {
        const b = e.target.value;
        setpassword(b);
        if (b.trim().length >= 8) {
            setCheck(false);
            setpassCheck(false);
        }
        else {
            setCheck(true);
            setpassCheck(true);
        }
    }
    const recheck = (e) => {
        const c = e.target.value;
        setconfirm(c);
        if (password === c) {
            setCheck(false);
            setconfirmcheck(false);
        }
        else {
            setCheck(true);
            setconfirmcheck(true);
        }
    }

    function vali1(e) {
        if (e.target.value === "yes") {
            setMode(true);
        }
        else {
            setMode(false);
        }
    }
    return (
        <div className="loginbox">
            <h1 className="blogname" style={{ color: "#eae2b7" }}>Travel Geek</h1>
            <h1 className="line__1" style={{ color: "#eae2b7" }}>Take only memories,</h1>
            <h1 className="line__2" style={{ color: "#eae2b7" }}>leave only footprints</h1>
            <h1 className="line__3" style={{ color: "#eae2b7" }}>Record your joys and let the world know about diverse locations.</h1>
            <div className="box">
                <div className="formlogin">User Login</div>
                <div className="existinguser">
                    <div className="question">Are you an existing user?</div>
                    <input className="label" type="radio" onClick={vali1} value={"yes"} name="choose" />
                    <label style={{ fontFamily: "Lucida Calligraphy", marginRight: "1rem", color: "black" }}>YES</label>
                    <input className="label" type="radio" onClick={vali1} value={"no"} name="choose" />
                    <label style={{ fontFamily: "Lucida Calligraphy", color: "black" }}>NO</label>
                </div>
                <div className="emailbox">
                    <div className="text">Email Id</div>
                    <input placeholder="username" onChange={emailvalidation} className="username" />
                    {emailcheck ? (<div className="alert">Please enter a valid email</div>) : null}
                </div>
                <div className="passwordbox">
                    <div className="text">Password</div>
                    <input placeholder="confirm" type="password" onChange={passwordvalidation} className="password" />
                    {passcheck ? (<div className="alert">password must have a minimum 8 characters</div>) : null}
                </div>
                {!mode && (<div className="confirmbox">
                    <div className="text">Confirm Password</div>
                    <input type="password" placeholder="confirm password" onChange={recheck} className="confirmpass" />
                    {confirmcheck ? (<div className="alert">password does not match</div>) : null}
                </div>)}
                <button className="button" disabled={check} onClick={open}>{mode ? "Login" : "Register"}</button>
            </div>
        </div>
    )
}

export default Login;

