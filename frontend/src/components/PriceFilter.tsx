type Props = {
  selectedPrice?: number;
  onChange: (value?: number) => void;
};

const PriceFilter = ({ selectedPrice, onChange }: Props) => {
  return (
    <div className="border-b border-slate-300 pb-5">
      <h4 className="text-lg font-semibold mb-3">Max Price</h4>
      <select
        className="p-2 border rounded-md w-full bg-white text-gray-700 border-gray-300 focus:border-[#A45EE5] focus:ring-[#A45EE5] transition-colors duration-300"
        value={selectedPrice}
        onChange={(event) =>
          onChange(
            event.target.value ? parseInt(event.target.value) : undefined
          )
        }
      >
        <option value="" className="text-gray-500">Select Max Price</option>
        {[50, 100, 200, 300, 500].map((price) => (
          <option key={price} value={price}>
            £{price}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PriceFilter;
