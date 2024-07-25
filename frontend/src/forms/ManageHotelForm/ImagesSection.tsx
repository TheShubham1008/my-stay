import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const ImagesSection = () => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<HotelFormData>();

  const existingImageUrls = watch("imageUrls");

  const handleDelete = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    imageUrl: string
  ) => {
    event.preventDefault();
    setValue(
      "imageUrls",
      existingImageUrls.filter((url) => url !== imageUrl)
    );
  };

  return (
    <div className="p-6 md:p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-[#A45EE5] mb-3">Images</h2>
      <div className="border border-gray-300 rounded p-4 flex flex-col gap-4">
        {existingImageUrls && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {existingImageUrls.map((url) => (
              <div key={url} className="relative group">
                <img
                  src={url}
                  alt="Hotel"
                  className="min-h-full object-cover rounded-lg transition duration-300 ease-in-out transform group-hover:scale-105"
                />
                <button
                  onClick={(event) => handleDelete(event, url)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 text-white font-semibold transition duration-300"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}

        <input
          type="file"
          multiple
          accept="image/*"
          className="w-full text-gray-700 font-normal border border-gray-300 rounded p-2 focus:border-[#A45EE5] focus:ring-[#A45EE5] transition duration-300"
          {...register("imageFiles", {
            validate: (imageFiles) => {
              const totalLength =
                imageFiles.length + (existingImageUrls?.length || 0);

              if (totalLength === 0) {
                return "At least one image should be added";
              }

              if (totalLength > 6) {
                return "Total number of images cannot be more than 6";
              }

              return true;
            },
          })}
        />
      </div>
      {errors.imageFiles && (
        <span className="text-red-500 text-sm font-bold">
          {errors.imageFiles.message}
        </span>
      )}
    </div>
  );
};

export default ImagesSection;
