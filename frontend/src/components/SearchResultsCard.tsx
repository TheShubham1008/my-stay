import { Link } from "react-router-dom";
import { HotelType } from "../../../backend/src/shared/types";
import { AiFillStar } from "react-icons/ai";

type Props = {
  hotel: HotelType;
};

const SearchResultsCard = ({ hotel }: Props) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] border border-[#A45EE5] rounded-lg p-8 gap-8 bg-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
      <div className="w-full h-[300px]">
        <img
          src={hotel.imageUrls[0]}
          className="w-full h-full object-cover object-center rounded-lg"
        />
      </div>
      <div className="grid grid-rows-[1fr_2fr_1fr] gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex">
              {Array.from({ length: hotel.starRating }).map((_, index) => (
                <AiFillStar key={index} className="fill-yellow-400" />
              ))}
            </span>
            <span className="text-sm text-gray-600">{hotel.type}</span>
          </div>
          <Link
            to={`/detail/${hotel._id}`}
            className="text-2xl font-bold text-[#A45EE5] hover:underline"
          >
            {hotel.name}
          </Link>
        </div>
        <div className="text-gray-700 line-clamp-4">{hotel.description}</div>
        <div className="grid grid-cols-2 items-end gap-4">
          <div className="flex gap-2 items-center">
            {hotel.facilities.slice(0, 3).map((facility, index) => (
              <span
                key={index}
                className="bg-[#A45EE5] text-white p-2 rounded-lg font-bold text-xs whitespace-nowrap"
              >
                {facility}
              </span>
            ))}
            <span className="text-sm text-gray-500">
              {hotel.facilities.length > 3 &&
                `+${hotel.facilities.length - 3} more`}
            </span>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="font-bold text-xl text-gray-800">
              £{hotel.pricePerNight} per night
            </span>
            <Link
              to={`/detail/${hotel._id}`}
              className="bg-[#A45EE5] text-white p-2 font-bold text-xl rounded-lg hover:bg-[#8338ec]"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsCard;
