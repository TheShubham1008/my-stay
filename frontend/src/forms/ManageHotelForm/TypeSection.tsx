import { useFormContext } from "react-hook-form";
import { hotelTypes } from "../../config/hotel-options-config";
import { HotelFormData } from "./ManageHotelForm";

const TypeSection = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  const typeWatch = watch("type");

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Type</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {hotelTypes.map((type) => (
          <label
            key={type}
            className={`cursor-pointer text-sm rounded-full px-4 py-2 font-semibold flex items-center justify-center transition-colors duration-300 ${
              typeWatch === type
                ? "bg-[#A45EE5] text-white hover:bg-[#8E34C4]"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <input
              type="radio"
              value={type}
              {...register("type", {
                required: "This field is required",
              })}
              className="hidden"
            />
            <span>{type}</span>
          </label>
        ))}
      </div>
      {errors.type && (
        <span className="text-red-500 text-sm font-bold mt-2 block">
          {errors.type.message}
        </span>
      )}
    </div>
  );
};

export default TypeSection;
