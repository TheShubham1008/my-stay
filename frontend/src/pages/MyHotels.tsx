import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as apiClient from "../api-client";
import { BsBuilding, BsMap } from "react-icons/bs";
import { BiHotel, BiMoney, BiStar } from "react-icons/bi";

const MyHotels = () => {
  const { data: hotelData } = useQuery(
    "fetchMyHotels",
    apiClient.fetchMyHotels,
    {
      onError: () => {},
    }
  );

  if (!hotelData) {
    return <span>No Hotels found</span>;
  }

  return (
    <div className="space-y-5 p-4 md:p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#A45EE5]">My Hotels</h1>
        <Link
          to="/add-hotel"
          className="flex bg-[#A45EE5] text-white text-xl font-bold py-2 px-4 rounded-md shadow-md hover:bg-[#8b4ccc] transition duration-300"
        >
          Add Hotel
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-8">
        {hotelData.map((hotel) => (
          <div
            data-testid="hotel-card"
            className="flex flex-col justify-between border border-slate-300 rounded-lg p-8 gap-5 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-2xl font-bold text-[#A45EE5]">{hotel.name}</h2>
            <div className="whitespace-pre-line text-gray-700">{hotel.description}</div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
              <div className="border border-slate-300 rounded-sm p-3 flex items-center bg-white shadow-sm">
                <BsMap className="mr-1 text-[#A45EE5]" />
                {hotel.city}, {hotel.country}
              </div>
              <div className="border border-slate-300 rounded-sm p-3 flex items-center bg-white shadow-sm">
                <BsBuilding className="mr-1 text-[#A45EE5]" />
                {hotel.type}
              </div>
              <div className="border border-slate-300 rounded-sm p-3 flex items-center bg-white shadow-sm">
                <BiMoney className="mr-1 text-[#A45EE5]" />£{hotel.pricePerNight} per night
              </div>
              <div className="border border-slate-300 rounded-sm p-3 flex items-center bg-white shadow-sm">
                <BiHotel className="mr-1 text-[#A45EE5]" />
                {hotel.adultCount} adults, {hotel.childCount} children
              </div>
              <div className="border border-slate-300 rounded-sm p-3 flex items-center bg-white shadow-sm">
                <BiStar className="mr-1 text-[#A45EE5]" />
                {hotel.starRating} Star Rating
              </div>
            </div>
            <span className="flex justify-end">
              <Link
                to={`/edit-hotel/${hotel._id}`}
                className="flex bg-[#A45EE5] text-white text-xl font-bold py-2 px-4 rounded-md shadow-md hover:bg-[#8b4ccc] transition duration-300"
              >
                View Details
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyHotels;
