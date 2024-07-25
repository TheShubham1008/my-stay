import { useFormContext } from "react-hook-form";
import { hotelFacilities } from "../../config/hotel-options-config";
import { HotelFormData } from "./ManageHotelForm";

const FacilitiesSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="p-6 md:p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-[#A45EE5] mb-3">Facilities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {hotelFacilities.map((facility) => (
          <label className="text-sm flex items-center gap-2 text-gray-700 font-medium">
            <input
              type="checkbox"
              value={facility}
              className="form-checkbox h-5 w-5 text-[#A45EE5] border-gray-300 rounded focus:ring-2 focus:ring-[#A45EE5] transition duration-300"
              {...register("facilities", {
                validate: (facilities) => {
                  if (facilities && facilities.length > 0) {
                    return true;
                  } else {
                    return "At least one facility is required";
                  }
                },
              })}
            />
            {facility}
          </label>
        ))}
      </div>
      {errors.facilities && (
        <span className="text-red-500 text-sm font-bold">
          {errors.facilities.message}
        </span>
      )}
    </div>
  );
};

export default FacilitiesSection;

