import React, { useEffect } from "react";
import { useRef } from "react";
import { connect } from "react-redux";
import { addContact } from "../redux/action";

function mapStateToProps(state) {
    return { contactsList: state.contacts.contactsList }
}

export default connect(mapStateToProps)(function LoginData(props) {
    const { contactsList, dispatch } = props
    let idRef = useRef('')
    let nameRef = useRef('')
    let phoneRef = useRef('')
    let emailRef = useRef('')

     // האם צריך פונקציה זו
    // useEffect(function () {
    //     console.log("contactsList", contactsList)
    // }, [, contactsList]);

    const login = (() => {
        dispatch(addContact({ id: idRef.current.value, name: nameRef.current.value, phone: phoneRef.current.value, email: emailRef.current.value }))
        alert(`hello ${nameRef.current.value}`);
    })
    return(
        <>
        <label>name </label>
        <input ref={nameRef}></input>
        <br></br>
        <label> id</label>
        <input ref={idRef}></input>
        <br></br>
        <label>email </label>
        <input ref={emailRef}></input>
        <br></br>
        <label>phone </label>
        <input ref={phoneRef}></input>
        <br></br>
        <button onClick={login}>login</button>
    </>
    )
})