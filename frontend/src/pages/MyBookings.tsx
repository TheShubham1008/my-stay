import { useQuery } from "react-query";
import * as apiClient from "../api-client";

const MyBookings = () => {
  const { data: hotels } = useQuery(
    "fetchMyBookings",
    apiClient.fetchMyBookings
  );

  if (!hotels || hotels.length === 0) {
    return <span>No bookings found</span>;
  }

  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold text-[#A45EE5]">My Bookings</h1>
      {hotels.map((hotel) => (
        <div
          key={hotel._id}
          className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] border border-[#A45EE5] rounded-lg p-8 gap-5 bg-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out"
        >
          <div className="lg:w-full lg:h-[250px]">
            <img
              src={hotel.imageUrls[0]}
              className="w-full h-full object-cover object-center rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-4 overflow-y-auto max-h-[300px]">
            <div className="text-2xl font-bold text-[#A45EE5]">
              {hotel.name}
              <div className="text-xs font-normal text-gray-600">
                {hotel.city}, {hotel.country}
              </div>
            </div>
            {hotel.bookings.map((booking) => (
              <div key={booking._id} className="bg-gray-100 p-4 rounded-lg">
                <div>
                  <span className="font-bold mr-2">Dates: </span>
                  <span>
                    {new Date(booking.checkIn).toDateString()} -{" "}
                    {new Date(booking.checkOut).toDateString()}
                  </span>
                </div>
                <div>
                  <span className="font-bold mr-2">Guests:</span>
                  <span>
                    {booking.adultCount} adults, {booking.childCount} children
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
