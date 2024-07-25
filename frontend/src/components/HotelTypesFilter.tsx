import { hotelTypes } from "../config/hotel-options-config";

type Props = {
  selectedHotelTypes: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const HotelTypesFilter = ({ selectedHotelTypes, onChange }: Props) => {
  return (
    <div className="border-b border-slate-300 pb-5">
      <h4 className="text-lg font-semibold mb-3">Hotel Type</h4>
      {hotelTypes.map((hotelType) => (
        <label
          key={hotelType}
          className="flex items-center space-x-2 cursor-pointer transition-colors duration-300 hover:text-[#A45EE5]"
        >
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-[#A45EE5] transition-colors duration-300 accent-[#A45EE5]"
            value={hotelType}
            checked={selectedHotelTypes.includes(hotelType)}
            onChange={onChange}
          />
          <span className="text-gray-700">{hotelType}</span>
        </label>
      ))}
    </div>
  );
};

export default HotelTypesFilter;






