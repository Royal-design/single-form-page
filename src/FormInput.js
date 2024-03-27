import { Billing } from "./Billing";
import { OptIn } from "./OptIn";
import { Shipping } from "./Shipping";
import useFormContext from "./hooks/useFormContext";

export const FormInput = () => {
  const { page } = useFormContext();
  const display = {
    0: <Billing />,
    1: <Shipping />,
    2: <OptIn />
  };
  return display[page];
};
