import { FormInput } from "./FormInput";
import useFormContext from "./hooks/useFormContext";

export const Form = () => {
  const {
    data,
    title,
    canSubmit,
    page,
    setPage,
    prevHide,
    nextHide,
    submitHide,
    disableNext,
    disablePrev
  } = useFormContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
  };
  const handlePrev = () => setPage((prev) => prev - 1);
  const handleNext = () => setPage((prev) => prev + 1);

  return (
    <form className="flex-col" onSubmit={handleSubmit}>
      <div className="nav-flex">
        <header>
          <h1>{title[page]}</h1>
        </header>
        <div className="flex-btn">
          <button
            type="button"
            className={`btn ${prevHide}`}
            onClick={handlePrev}
            disabled={disablePrev}
          >
            Prev
          </button>
          <button
            type="button"
            className={`btn ${nextHide}`}
            disabled={disableNext}
            onClick={handleNext}
          >
            Next
          </button>
          <button
            type="submit"
            className={`btn ${submitHide}`}
            disabled={!canSubmit}
          >
            Submit
          </button>
        </div>
      </div>

      <FormInput />
    </form>
  );
};
