import useFormContext from "./hooks/useFormContext";

export const ProgressBar = () => {
  const { title, page } = useFormContext();
  const interval = 100 / Object.keys(title).length;

  const progress = ((page + 1) * interval).toFixed(2);

  const steps = Object.keys(title).map((step, i) => (
    <div key={i} className="step">
      step {i + 1}
    </div>
  ));
  return (
    <section className="progress-container">
      <div className="barmarker-container">{steps}</div>
      <progress max="100" value={progress} className="progress"></progress>
    </section>
  );
};
