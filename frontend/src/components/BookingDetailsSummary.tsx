import { HotelType } from "../../../backend/src/shared/types";

type Props = {
  checkIn: Date;
  checkOut: Date;
  adultCount: number;
  childCount: number;
  numberOfNights: number;
  hotel: HotelType;
};

const BookingDetailsSummary = ({
  checkIn,
  checkOut,
  adultCount,
  childCount,
  numberOfNights,
  hotel,
}: Props) => {
  return (
    <div className="grid gap-4 rounded-lg border border-[#A45EE5] p-8 bg-white shadow-lg  h-fit">
      <h2 className="text-2xl font-bold text-[#A45EE5]">Your Booking Details</h2>
      <div className="border-b py-2">
        <span className="font-semibold">Location:</span>
        <div className="font-bold">{`${hotel.name}, ${hotel.city}, ${hotel.country}`}</div>
      </div>
      <div className="flex justify-between">
        <div>
          <span className="font-semibold">Check-in:</span>
          <div className="font-bold"> {checkIn.toDateString()}</div>
        </div>
        <div>
          <span className="font-semibold">Check-out:</span>
          <div className="font-bold"> {checkOut.toDateString()}</div>
        </div>
      </div>
      <div className="border-t border-b py-2">
        <span className="font-semibold">Total length of stay:</span>
        <div className="font-bold">{numberOfNights} nights</div>
      </div>

      <div>
        <span className="font-semibold">Guests:</span>
        <div className="font-bold">
          {adultCount} adults & {childCount} children
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsSummary;
