import { ArrowBack } from '@material-ui/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/Contact.scss'


const Contact = () => {

    const [enteredName, setEnteredName] = useState("");

    const [enteredEmail, setEnteredEmail] = useState("");

    const [enteredMessage, setEnteredMessage] = useState("");

    



    const nameChangeHandler = (e) =>{
        setEnteredName(e.target.value)
        // if(e.target.value.trim().length > 0){
        //     setIsNameValid(true)
        // }
    };


    const messageChangeHandler = (e) =>{
        setEnteredMessage(e.target.value)
    };

    const emailChangeHandler = (e) =>{
        setEnteredEmail(e.target.value)
    }

    const formSubmit = (e) =>{
        e.preventDefault();

        // if(enteredName.trim().length === 0 || enteredEmail.trim().length === 0 || enteredMessage.trim().length === 0){
        //     // setError({
        //     //     title: "invalid name"
        //     // })
        //     setIsNameValid(false);
        //     return;
        // }

        

        const sentMessage = {
            name: enteredName,
            email: enteredEmail,
            message: enteredMessage,
        }

        setEnteredName("");
        setEnteredEmail("");
        setEnteredMessage("")

        console.log(sentMessage)
    }

    

     
    return (
        <div className='contact'>
            <Link to='/'>
                <ArrowBack className='arrow'/>
            </Link>
            <div className="inputs">
                <h1>Contact us</h1>
                <form onSubmit={formSubmit}>
                    <div form_control>
                        <label> Name</label>
                        <input
                            required
                            onChange={nameChangeHandler} value={enteredName} type="text"
                            // style={{
                            //     borderColor: !isNameValid ? "red" : "#ccc",  
                            //     // background: !isValid ? "salmon" : "transparent" 
                            //     }}
                            />
                        <label> Email</label>
                        <input 
                            required
                            onChange={emailChangeHandler} value={enteredEmail} type="email" />
                        <label> Message</label>
                        <input 
                            required
                            onChange={messageChangeHandler} value={enteredMessage} type="text" className='message'/>
                    </div>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
