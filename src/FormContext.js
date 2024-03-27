import { createContext, useEffect } from "react";
import { useState } from "react";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const [data, setData] = useState({
    billFirstName: "",
    billLastName: "",
    billAddress1: "",
    billAddress2: "",
    billCity: "",
    billState: "",
    billZipCode: "",
    shipFirstName: "",
    shipLastName: "",
    shipAddress1: "",
    shipAddress2: "",
    shipCity: "",
    shipState: "",
    shipZipCode: "",
    shipSameAsBilling: false,
    newsLetter: false
  });

  const [page, setPage] = useState(2);
  const title = {
    0: "Billing Info",
    1: "Shipping Info",
    2: "Opt-In"
  };
  const handleChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    const value = type === "checkbox" ? e.target.checked : e.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const {
    billAddress2,
    shipAddress2,
    newsLetter,
    shipSameAsBilling,
    ...requiredData
  } = data;
  const canSubmit =
    [...Object.values(requiredData)].every(Boolean) &&
    page === Object.keys(title).length - 1;

  useEffect(() => {
    if (data.shipSameAsBilling) {
      setData((prevData) => ({
        ...prevData,
        shipFirstName: prevData.billFirstName,
        shipLastName: prevData.billLastName,
        shipAddress1: prevData.billAddress1,
        shipAddress2: prevData.billAddress2,
        shipCity: prevData.billCity,
        shipState: prevData.billState,
        shipZipCode: prevData.billZipCode
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        shipFirstName: "",
        shipLastName: "",
        shipAddress1: "",
        shipAddress2: "",
        shipCity: "",
        shipState: "",
        shipZipCode: ""
      }));
    }
  }, [data.shipSameAsBilling]);

  const canNextPage1 = Object.keys(data)
    .filter((key) => key.startsWith("bill") && key !== "billAddress2")
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage2 = Object.keys(data)
    .filter((key) => key.startsWith("ship") && key !== "shipAddress2")
    .map((key) => data[key])
    .every(Boolean);

  const disablePrev = page === 0;
  const disableNext =
    page === Object.keys(title).length - 1 ||
    (page === 0 && !canNextPage1) ||
    (page === 1 && !canNextPage2);

  const nextHide = page === Object.keys(title).length - 1 && "remove-button";
  const prevHide = page === 0 && "remove-button";
  const submitHide = page !== Object.keys(title).length - 1 && "remove-button";

  return (
    <FormContext.Provider
      value={{
        data,
        page,
        title,
        setPage,
        setData,
        handleChange,
        canSubmit,
        prevHide,
        nextHide,
        submitHide,
        disableNext,
        disablePrev
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
