import { Form } from "./Form";
import { FormProvider } from "./FormContext";
import "./app.style.scss";
function App() {
  return (
    <FormProvider>
      <Form />
    </FormProvider>
  );
}

export default App;
