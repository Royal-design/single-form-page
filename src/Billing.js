import React from "react";

export const Billing = ({ data, handleChange }) => {
  const content = (
    <div className="flex-col">
      <div className="col-split">
        <div className="flex-col">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.firstName}
            onChange={handleChange}
            placeholder="Jane"
            id="firstname"
          />
        </div>
        <div className="flex-col">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.lastName}
            onChange={handleChange}
            placeholder="Doe"
            id="lastName"
          />
        </div>
      </div>
      <label htmlFor="address1">Address</label>
      <input
        type="text"
        id="address1"
        name="address1"
        placeholder="555 Wallaby Way"
        pattern="[\w\d\s.#]{2,}"
        value={data.address1}
        onChange={handleChange}
      />
      <label htmlFor="address2" className="offscreen">
        2nd Address Line
      </label>
      <input
        type="text"
        id="address2"
        name="address2"
        placeholder="555 Wallaby Way"
        pattern="[\w\d\s.#]{2,}"
        value={data.address2}
        onChange={handleChange}
      />
      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        name="city"
        placeholder="New York"
        pattern="([A-Z])[\w\s.]{1,}"
        value={data.city}
        onChange={handleChange}
      />
      <label htmlFor="state">State</label>
      <select
        id="state"
        name="state"
        value={data.state}
        onChange={handleChange}
      >
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District Of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </select>

      <label htmlFor="zipcode">Zip Code</label>
      <input
        type="text"
        id="zipcode"
        name="zipCode"
        placeholder="12345"
        pattern="[0-9]{5}"
        maxLength="5"
        value={data.zipCode}
        onChange={handleChange}
      />
    </div>
  );
  return content;
};
