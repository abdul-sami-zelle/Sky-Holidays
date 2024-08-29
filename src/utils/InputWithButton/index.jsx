import React from "react";
import './index.css'

export default function InputFieldWithBtn() {
    return (
        <div className="inputWithBtn">

            <div className="stt-mailchimp-form">
                <input type="email" name="EMAIL" class="form-control" placeholder="Email Address" />
                <input type="submit" name="submit" value="Subscribe" />
            </div>
        </div>
    )
}