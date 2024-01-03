import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { connect } from "react-redux";
import LoginData from "./login";


function mapStateToProps(state) {
    return { contactsList: state.contacts.contactsList };
}

export default connect(mapStateToProps)(function Connect(props) {
    const { contactsList } = props
    let idRef = useRef('')
    let nameRef = useRef('')
    const [flag, setFlag] = useState(false);

    const connecting = (() => {
        if (contactsList.find(num => num.id === idRef.current.value)) {
            alert(`hello ${nameRef.current.value}`)
        }
        else {
            setFlag(true)
            alert(`oops... you are not founds`)
        }
    })
    return (
        <>
            <label>name </label>
            <input ref={nameRef}></input>
            <br></br>
            <label> id</label>
            <input ref={idRef}></input>
            <br></br>
            <button onClick={connecting}>connect</button>
            {!flag || <LoginData />}

        </>
    )
})



           {/* <div class="container mt-3">
                <h2>Stacked form</h2>
                <form action="/action_page.php">
                    <div class="mb-3 mt-3">
                        <label for="email">Email:</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
                    </div>
                    <div class="mb-3">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
                    </div>
                    <div class="form-check mb-3">
                        <label class="form-check-label">
                            <input class="form-check-input" type="checkbox" name="remember"> Remember me
                        </label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div> */}