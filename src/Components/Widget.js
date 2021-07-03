import React from 'react'
import './Widget.css'
import u_ill from '../Images/upload_illustration.svg'
import o_ill from '../Images/superhero.svg'
import { useState,useEffect } from 'react'

const Widget2 = (props) => {

    const [canISubmit, setCanISubmit] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [selected, setSelected] = useState(false);
    const [inputFile, setInputFile] = useState("");

    const submitImage = () => {
        setInputFile("");
        setSubmitted(true);
    }

    const checkValue = (e) => {
        if(e.target.value != null){
            if(e.target.files[0].size > 3145728){
                alert("File is too large! Select a file with size less than 3MB.");
            }
            else{
                setSelected(true);
                setCanISubmit(true);
                setInputFile(e.target.files[0]);
            }
        }
        else{
            setCanISubmit(false);
        }
    }

    const handleDelete =  () => {
        setCanISubmit(false);
        setSelected(false);
    }


    return (
        <div className = {props.verify ? "widget-container" : "widget-container-hidden"}>
            {
                !submitted ?
                    <div className = "input-slide">
                        <div className = "input-title">
                            Upload Your Aadhar Card
                        </div>
                        <div className = "instructions-div">
                            <div className = "illustration-input-div">
                                <img src = {u_ill} className = "illustration-input" />
                            </div>
                            <div className = "right">
                                <div className = "instructions">
                                    <ol>
                                        <li> The uploaded image should be clear and readable. </li>
                                        <li> The uploaded image shouldn't be larger than 3MB. </li>
                                    </ol>
                                </div>
                                <div className = "input-div">
                                    {
                                        !selected ?
                                            <div className = "upload-div">
                                                <input type = "file" accept = "image/*"
                                                    id = "aadhar-input" onChange = {checkValue}
                                                    style={{ display: 'none' }} />
                                                <label htmlFor="aadhar-input"
                                                    className = "label-visible">
                                                        Upload Image <i className="fas fa-upload"
                                                                        style = {{color: "white", marginLeft: "5px"}}></i>
                                                </label>
                                            </div>
                                        :
                                        <div className = "delete-div">
                                            <div className = "inputString">
                                                <span style = {{fontSize: "10px"}}>File Selected:</span>
                                                <br></br>
                                                { ( inputFile.name.length <= 20 ? inputFile.name : inputFile.name.substr(0,17) + '...' ) || '' }
                                            </div>
                                            <i className="fas fa-trash"
                                                style = {{cursor: "pointer", fontSize: "20px"}}
                                                onClick = {handleDelete}></i>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className = "controls">
                            <div className = "cancel-div">
                                <button type = "button" id = "cancel-button" onClick = { () => {
                                    props.setVerify(false);
                                }}>
                                    Cancel
                                </button>
                            </div>
                            <div className = "submit-div">
                                <button type = "button"
                                        id = {canISubmit? "submit-button" : "submit-button-disabled"}
                                        onClick = {submitImage}
                                        disabled = {!selected}> 
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                :
                    <div className = "exit-slide">
                        <div className = "exit-title">
                            Upload Successful!
                        </div>
                        <div className = "exit-tagline">
                            Thank you for helping the community be safer.
                            <b> You're a Hero! </b>
                        </div>
                        <div className = "exit-illustration">
                            <img src = {o_ill} className = "illustration-input" />
                        </div>
                        <div className = "cancel-div">
                            <button type = "button" id = "continue-button" onClick = { () => {
                                props.setVerify(false);
                            }}>
                                Continue
                            </button>
                        </div>
                    </div>

            }
        </div>
    )
}

export default Widget2
