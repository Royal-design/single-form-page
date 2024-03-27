import useFormContext from "./hooks/useFormContext";

export const Shipping = () => {
  const { data, handleChange } = useFormContext();
  const content = (
    <div className="flex-col">
      <div className="check">
        <input
          type="checkbox"
          name="shipSameAsBilling"
          checked={data.shipSameAsBilling}
          onChange={handleChange}
          id="shipCheck"
        />
        <label htmlFor="shipCheck">Same as Billing Address</label>
      </div>
      <div className="col-split">
        <div className="flex-col">
          <label htmlFor="shipFirstName">First Name</label>
          <input
            type="text"
            name="shipFirstName"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.shipFirstName}
            onChange={handleChange}
            placeholder="Jane"
            id="shipFirstName"
            disabled={data.shipSameAsBilling}
          />
        </div>
        <div className="flex-col">
          <label htmlFor="shipLastName">Last Name</label>
          <input
            type="text"
            name="shipLastName"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.shipLastName}
            onChange={handleChange}
            placeholder="Doe"
            id="shipLastName"
            disabled={data.shipSameAsBilling}
          />
        </div>
      </div>
      <label htmlFor="shipAddress1">Address</label>
      <input
        type="text"
        id="shipAddress1"
        name="shipAddress1"
        placeholder="555 Wallaby Way"
        pattern="[\w\d\s.#]{2,}"
        value={data.shipAddress1}
        onChange={handleChange}
        disabled={data.shipSameAsBilling}
      />
      <label htmlFor="shipAddress2" className="offscreen">
        2nd Address Line
      </label>
      <input
        type="text"
        id="shipAddress2"
        name="shipAddress2"
        placeholder="555 Wallaby Way"
        pattern="[\w\d\s.#]{2,}"
        value={data.shipAddress2}
        onChange={handleChange}
        disabled={data.shipSameAsBilling}
      />
      <label htmlFor="shipCity">City</label>
      <input
        type="text"
        id="shipCity"
        name="shipCity"
        placeholder="New York"
        pattern="([A-Z])[\w\s.]{1,}"
        value={data.shipCity}
        onChange={handleChange}
        disabled={data.shipSameAsBilling}
      />
      <label htmlFor="shipState">State</label>
      <select
        id="shipState"
        name="shipState"
        value={data.shipState}
        onChange={handleChange}
        disabled={data.shipSameAsBilling}
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

      <label htmlFor="shipZipcode">Zip Code</label>
      <input
        type="text"
        id="shipZipcode"
        name="shipZipCode"
        placeholder="12345"
        pattern="[0-9]{5}"
        maxLength="5"
        value={data.shipZipCode}
        onChange={handleChange}
        disabled={data.shipSameAsBilling}
      />
    </div>
  );
  return content;
};
