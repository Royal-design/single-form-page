import useFormContext from "./hooks/useFormContext";
export const OptIn = () => {
  const { data, handleChange } = useFormContext();
  const content = (
    <div className="flex-col">
      <div className="check">
        <input
          type="checkbox"
          name="newsLetter"
          checked={data.newsLetter}
          onChange={handleChange}
          id="newsLetter"
        />
        <label htmlFor="newsLetter">Receive our newsletter</label>
      </div>
      <div className="news-content">
        <p>Save 10% Now</p>
        <p>Receive Discount Coupons</p>
        <p>Find Out About New Products</p>
      </div>
    </div>
  );
  return content;
};
