import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offer: false,
    pushNotification: "",
  });

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <form onSubmit={submitHandler} className="space-y-4">
        <div>
          <label className="block font-semibold">First Name</label>
          <input
            type="text"
            name="firstname"
            className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
            value={formData.firstname}
            onChange={changeHandler}
            placeholder="First Name"
          />
        </div>

        <div>
          <label className="block font-semibold">Last Name</label>
          <input
            type="text"
            name="lastname"
            className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
            value={formData.lastname}
            onChange={changeHandler}
            placeholder="Last Name"
          />
        </div>

        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email"
          />
        </div>

        <div>
          <label className="block font-semibold">Country</label>
          <select
            name="country"
            className="w-full p-2 border rounded"
            value={formData.country}
            onChange={changeHandler}
          >
            <option>India</option>
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Street Address</label>
          <input
            type="text"
            name="streetAddress"
            className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
            value={formData.streetAddress}
            onChange={changeHandler}
            placeholder="Street Address"
          />
        </div>

        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block font-semibold">City</label>
            <input
              type="text"
              name="city"
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
              value={formData.city}
              onChange={changeHandler}
              placeholder="City"
            />
          </div>
          <div className="w-1/2">
            <label className="block font-semibold">State</label>
            <input
              type="text"
              name="state"
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
              value={formData.state}
              onChange={changeHandler}
              placeholder="State"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold">Postal Code</label>
          <input
            type="text"
            name="postalCode"
            className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
            value={formData.postalCode}
            onChange={changeHandler}
            placeholder="Postal Code"
          />
        </div>

        <fieldset className="border p-4 rounded">
          <legend className="font-semibold">Push Notifications</legend>
          <p className="text-sm text-gray-600">Delivered via SMS to your phone.</p>
          <div className="space-y-2 mt-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="pushNotification"
                value="Everything"
                onChange={changeHandler}
              />
              <span>Push Everything</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="pushNotification"
                value="Same as Email"
                onChange={changeHandler}
              />
              <span>Same as Email</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="pushNotification"
                value="No push Notification"
                onChange={changeHandler}
              />
              <span>No push Notification</span>
            </label>
          </div>
        </fieldset>

        <div className="flex items-center space-x-2">
          <input type="checkbox" name="comments" onChange={changeHandler} />
          <label>Get notified when someone comments.</label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" name="candidates" onChange={changeHandler} />
          <label>Get notified when a candidate applies.</label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" name="offer" onChange={changeHandler} />
          <label>Get notified when an offer is accepted/rejected.</label>
        </div>

        <button className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600">Save</button>
      </form>
    </div>
  );
};

export default Form;
