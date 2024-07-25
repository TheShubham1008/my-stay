import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const GuestsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="p-6 md:p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-[#A45EE5] mb-3">Guests</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <label className="text-gray-700 text-sm font-semibold">
          Adults
          <input
            className="border border-gray-300 rounded w-full py-2 px-3 mt-1 font-normal focus:border-[#A45EE5] focus:ring-[#A45EE5] transition duration-300"
            type="number"
            min={1}
            {...register("adultCount", {
              required: "This field is required",
            })}
          />
          {errors.adultCount?.message && (
            <span className="text-red-500 text-sm font-bold">
              {errors.adultCount?.message}
            </span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-semibold">
          Children
          <input
            className="border border-gray-300 rounded w-full py-2 px-3 mt-1 font-normal focus:border-[#A45EE5] focus:ring-[#A45EE5] transition duration-300"
            type="number"
            min={0}
            {...register("childCount", {
              required: "This field is required",
            })}
          />
          {errors.childCount?.message && (
            <span className="text-red-500 text-sm font-bold">
              {errors.childCount?.message}
            </span>
          )}
        </label>
      </div>
    </div>
  );
};

export default GuestsSection;

