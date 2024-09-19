const Footer = () => {
  return (
    <div className="bg-[#A45EE5] py-6 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
        <span className="text-2xl md:text-3xl text-white font-semibold tracking-tight mb-4 md:mb-0">
          My Stay.com
        </span>
{/*         <span className="text-xl md:text-3xl text-white font-semibold tracking-tight mb-4 md:mb-0">
          Made with ❤️ by Shubham Singh 🚀✨
        </span> */}
        <span className="text-white font-medium tracking-tight flex gap-4">
          <p className="cursor-pointer transition duration-300 ease-in-out hover:text-gray-200">Privacy Policy</p>
          <p className="cursor-pointer transition duration-300 ease-in-out hover:text-gray-200">Terms of Service</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
