import { comment } from "postcss";
import react, { useState } from "react";

const Form=()=>{
    const [formData,setFormData]=useState({
        firstname:"",
        lastname:"",
        email:"",
        country:"India",
        streetAddress:"",
        city:"",
        state:"",
        postalCode:"",
        comments:false,
        candidates:false,
        offer:false,
        pushNotification:"",
        pushEverything:"",
        pushEmail:""
    })

    function changeHandler(event){
        const {name,value,type,checked} = event.target;
        setFormData((prev)=>({
            ...prev,
            [name]: type=== "checked"? checked:value
        }))
    }
    return(
        <div>
            <form>
                <label htmlFor="firstname">First Name</label>
                <br />
                <input 
                type="text"
                placeholder="First Name"
                name="firstname"
                id="firstname"
                value={formData.firstname}
                onChange={changeHandler}
                 />
                 <br />
                 <br />

                <label htmlFor="lastname">Last Name</label>
                <br />

                <input 
                type="text"
                placeholder="Last Name"
                name="lastname"
                id="lastname"
                value={formData.lastname}
                onChange={changeHandler}
                 />
                 <br />
                 <br />


                <label htmlFor="email">Email</label>
                <br />

                <input 
                type="text"
                placeholder="Enter email"
                name="email"
                id="email"
                value={formData.email}
                onChange={changeHandler}
                 />
                 <br />
                 <br />

                 <label htmlFor="country">Country</label>
                 <select name="country" id="country" value={formData.country} onChange={changeHandler}>
                    <option>India</option>
                    <option>United Sttates</option>
                    <option>Canada</option>
                    <option>Maxico</option>

                 </select>

                 <br />
                 <br />


                 <label htmlFor="streetAddress">Street Address</label>
                <br />

                <input 
                type="text"
                placeholder="B25/a"
                name="streetAddress"
                id="streetAddress"
                value={formData.StreetAddress}
                onChange={changeHandler}
                 />
                 <br />
                 <br />

                 <label htmlFor="city">City</label>
                <br />

                <input 
                type="text"
                placeholder="Darbhanga"
                name="city"
                id="city"
                value={formData.city}
                onChange={changeHandler}
                 />
                 <br />
                 <br />

                 <label htmlFor="state">state</label>
                <br />

                <input 
                type="text"
                placeholder="Delhi"
                name="state"
                id="state"
                value={formData.state}
                onChange={changeHandler}
                 />
                 <br />
                 <br />

                 <label htmlFor="postalCode">Postal Code</label>
                <br />

                <input 
                type="text"
                placeholder="110025"
                name="postalCode"
                id="postalCode"
                value={formData.postalCode}
                onChange={changeHandler}
                 />
                 <br />
                 <br />

                 <input 
                type="checkbox"
                name="comments"
                id="comments"
                checked={formData.comments}
                onChange={changeHandler}
                 /> 

                 <div>
                    <label htmlFor="comments">Comments</label>
                    <p>Get notified when someone posts a comment on posting.</p>
                 </div>

                 <input 
                type="checkbox"
                name="candidates"
                id="candidates"
                checked={formData.candidates}
                onChange={changeHandler}
                 /> 

                 <div>
                    <label htmlFor="comments">Candidates</label>
                    <p>Get notified when a cnndidate apply for a job.</p>
                 </div>

                 <input 
                type="checkbox"
                name="offer"
                id="offer"
                checked={formData.offer}
                onChange={changeHandler}
                 /> 

                 <div>
                    <label htmlFor="comments">Offer</label>
                    <p>Get notified when a cnndidate accepts or rejects an offer.</p>
                 </div>


                <fieldset>
                    <legend>Push Notifications</legend>
                    <p>These are delivered viia SMS to your mobile phone.</p>

                    <input
                    type="radio"
                    id="pushEveryything"
                    value="Everything"
                    name="pushEverything"
                    onChange={changeHandler}
                    >
                    <label htmlFor="pushEverything">Push Everything</label>
                    </input>

                    <input
                    type="radio"
                    id="pushEmail"
                    value="Same as Email"
                    name="pushNotification"
                    onChange={changeHandler}
                    >
                    <label htmlFor="pushEmail">Same as Email</label>
                    </input>

                    <input
                    type="radio"
                    id="pushNothing"
                    value="No push Notification"
                    name="pushNotification"
                    onChange={changeHandler}
                    >
                    <label htmlFor="pushNothing">No push Notification</label>
                    </input>
                </fieldset>
            </form>
        </div>
    )
}
export default Form;