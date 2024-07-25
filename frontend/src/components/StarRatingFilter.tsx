type Props = {
  selectedStars: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const StarRatingFilter = ({ selectedStars, onChange }: Props) => {
  return (
    <div className="border-b border-slate-300 pb-5">
      <h4 className="text-lg font-semibold mb-3">Property Rating</h4>
      {["5", "4", "3", "2", "1"].map((star) => (
        <label
          key={star}
          className="flex items-center space-x-2 cursor-pointer transition-colors duration-300 hover:text-[#A45EE5]"
        >
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-[#A45EE5] transition-colors duration-300 accent-[#A45EE5]"
            value={star}
            checked={selectedStars.includes(star)}
            onChange={onChange}
          />
          <span className="text-gray-700">{star} Stars</span>
        </label>
      ))}
    </div>
  );
};

export default StarRatingFilter;
