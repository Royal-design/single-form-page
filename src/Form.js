import { Billing } from "./Billing";
import { useState } from "react";

export const Form = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
  };

  const handleChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    const value = type === "checkbox" ? e.target.checked : e.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const { address2, ...otherProps } = data;
  const canSave = [...Object.values(otherProps)].every(Boolean);
  return (
    <form className="flex-col" onSubmit={handleSubmit}>
      <Billing data={data} handleChange={handleChange} />
      <button className="btn" disabled={!canSave}>
        Submit
      </button>
    </form>
  );
};
