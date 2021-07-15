import React from 'react'
import "./Faq.scss";
import logo from "../assest/chatbot-icon.jpg";
import data from "./data.json";

function Faq() {
    return (
        <div className="faq_wrapper">
            <div className="faq">
                <img src={logo} alt="not found" />
                <div className="header">
                    Frequently Asked Questions <span>?</span>
                </div>
                <div>
                    {data.map((e) => {
                        return (
                            <div className="options">
                            <span className="hello"></span>
                            <span>{e.msg}</span>
                            </div>
                        )
                    })}
                    <div className="conversation">Start a New Conversation</div>
                </div>
            </div>
        </div>
    )
}
export default Faq;