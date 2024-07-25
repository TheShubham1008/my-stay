import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const DetailsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="flex flex-col gap-6 p-6 md:p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-[#A45EE5] mb-3">Add Hotel</h1>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Name
        <input
          type="text"
          className="border border-[#A45EE5] rounded w-full py-2 px-3 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#A45EE5] transition duration-300"
          {...register("name", { required: "This field is required" })}
        ></input>
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </label>

      <div className="flex gap-4">
        <label className="text-gray-700 text-sm font-bold flex-1">
          City
          <input
            type="text"
            className="border border-[#A45EE5] rounded w-full py-2 px-3 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#A45EE5] transition duration-300"
            {...register("city", { required: "This field is required" })}
          ></input>
          {errors.city && (
            <span className="text-red-500">{errors.city.message}</span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Country
          <input
            type="text"
            className="border border-[#A45EE5] rounded w-full py-2 px-3 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#A45EE5] transition duration-300"
            {...register("country", { required: "This field is required" })}
          ></input>
          {errors.country && (
            <span className="text-red-500">{errors.country.message}</span>
          )}
        </label>
      </div>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Description
        <textarea
          rows={10}
          className="border border-[#A45EE5] rounded w-full py-2 px-3 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#A45EE5] transition duration-300"
          {...register("description", { required: "This field is required" })}
        ></textarea>
        {errors.description && (
          <span className="text-red-500">{errors.description.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold max-w-[50%]">
        Price Per Night
        <input
          type="number"
          min={1}
          className="border border-[#A45EE5] rounded w-full py-2 px-3 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#A45EE5] transition duration-300"
          {...register("pricePerNight", { required: "This field is required" })}
        ></input>
        {errors.pricePerNight && (
          <span className="text-red-500">{errors.pricePerNight.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold max-w-[50%]">
        Star Rating
        <select
          {...register("starRating", {
            required: "This field is required",
          })}
          className="border border-[#A45EE5] rounded w-full py-2 px-3 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#A45EE5] transition duration-300"
        >
          <option value="" className="text-sm font-bold">
            Select a Rating
          </option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
        {errors.starRating && (
          <span className="text-red-500">{errors.starRating.message}</span>
        )}
      </label>
    </div>
  );
};

export default DetailsSection;

