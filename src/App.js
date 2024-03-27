import { Form } from "./Form";
import { FormProvider } from "./FormContext";
import { ProgressBar } from "./ProgressBar";
import "./app.style.scss";
function App() {
  return (
    <FormProvider>
      <ProgressBar />
      <Form />
    </FormProvider>
  );
}

export default App;
