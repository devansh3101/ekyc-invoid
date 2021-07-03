import React from 'react'
import './LandingPage.css'
import Illustration from '../Images/Blogging Minimalistic/blogging.svg'
import { useState } from 'react'
import Widget from './Widget'

const LandingPage = () => {
    const [verify, setVerify]  = useState(false);

    return (
        <div className = "LandingPage-container">
            <div className = "illustration-div">
                <img src = {Illustration} alt = "Illustration" className = "demo-illustration" />
            </div>
            <div className = "written-content">
                <div className = "title">
                    Identity <br></br> Verification
                </div>
                <div className = "tagline">
                    All it will take are a few quick seconds.
                </div>
                <div className = "button" onClick = { () => { setVerify(true); }}>
                    Verify Identity
                </div>
            </div>
            <Widget verify = {verify}
                    setVerify = {setVerify}
            />
        </div>
    )
}

export default LandingPage
