import { Link } from "react-router-dom";
import { HotelType } from "../../../backend/src/shared/types";

type Props = {
  hotel: HotelType;
};

const LatestDestinationCard = ({ hotel }: Props) => {
  return (
    <Link
      to={`/detail/${hotel._id}`}
      className="relative cursor-pointer overflow-hidden rounded-md transform transition duration-300 hover:scale-105"
    >
      <div className="h-[300px] overflow-hidden">
        <img
          src={hotel.imageUrls[0]}
          className="w-full h-full object-cover object-center transition duration-300 transform hover:scale-110"
        />
      </div>

      <div className="absolute bottom-0 p-4 bg-black bg-opacity-50 w-full rounded-b-md transition duration-300 transform hover:bg-opacity-75">
        <span className="text-white font-bold tracking-tight text-3xl">
          {hotel.name}
        </span>
      </div>
    </Link>
  );
};

export default LatestDestinationCard;
