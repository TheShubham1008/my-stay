import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <div className="bg-[#A45EE5] py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <span className="text-2xl md:text-3xl text-white font-semibold tracking-tight">
          <Link to="/">My Stay.com</Link>
        </span>
        <span className="flex space-x-4">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-white px-4 py-2 rounded-md font-medium transition duration-300 ease-in-out hover:bg-[#8b4ccc]"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center text-white px-4 py-2 rounded-md font-medium transition duration-300 ease-in-out hover:bg-[#8b4ccc]"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex bg-white items-center text-[#A45EE5] px-4 py-2 rounded-md font-medium transition duration-300 ease-in-out hover:bg-gray-100"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;

